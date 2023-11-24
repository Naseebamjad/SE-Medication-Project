import shutil
import os
from pathlib import Path
from fastapi import UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from .. import models, schemas
from ..core.config import settings


def save_image_file(upload_file: UploadFile, doctor_id: int, images_folder: str):
    delete_image_file(doctor_id= doctor_id, images_folder= images_folder)
    filename = f"{doctor_id}{Path(upload_file.filename).suffix}"
    file_path = Path(images_folder) / filename
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)

def delete_image_file(doctor_id: int, images_folder: str):
    for extension in settings.IMAGE_EXTENSIONS:
        file_path = Path(images_folder) / f"{doctor_id}.{extension}"
        if file_path.is_file():
            os.remove(file_path)

def get_image(doctor_id: int, images_folder:str):
    for extension in settings.IMAGE_EXTENSIONS:
        image_path = Path(f"{settings.IMAGES_PATH}{doctor_id}.{extension}")
        if image_path.is_file():
            return FileResponse(image_path)
    return None

def create_doctor(db: Session, doctor: schemas.DoctorCreate):
    db_doctor = models.Doctor(name=doctor.name, category=doctor.category, email=doctor.email)
    db.add(db_doctor)
    db.commit()
    db.refresh(db_doctor)
    return db_doctor

def get_doctor_by_email(db: Session, doctor_email: str):
    return db.query(models.Doctor).filter(models.Doctor.email == doctor_email).first()

def get_doctor(db: Session, doctor_id: int):
    return db.query(models.Doctor).filter(models.Doctor.id == doctor_id).first()

def get_doctors(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Doctor).offset(skip).limit(limit).all()

def update_doctor(db: Session, doctor_id: int, update_data: schemas.DoctorUpdate, images_folder: str):
    db_doctor = get_doctor(db, doctor_id)
    if db_doctor:
        update_data_dict = update_data.model_dump(exclude_unset=True)
        if 'image' in update_data_dict:
            save_image_file(update_data.image, db_doctor.id, images_folder)
            del update_data_dict['image']
        for key, value in update_data_dict.items():
            setattr(db_doctor, key, value)
        db.commit()
        db.refresh(db_doctor)
    return db_doctor

def delete_doctor(db: Session, doctor_id: int, images_folder: str):
    db_doctor = get_doctor(db, doctor_id)
    if db_doctor:
        db.delete(db_doctor)
        db.commit()
        delete_image_file(doctor_id= doctor_id, images_folder= images_folder)
    return db_doctor
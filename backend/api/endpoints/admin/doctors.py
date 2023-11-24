from fastapi import APIRouter, Depends, HTTPException, status, Form, File, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from typing import List, Optional
from pathlib import Path
from pydantic import EmailStr


from .... import crud, models, schemas
from ...deps import get_db, get_current_admin
from ....core.config import settings


router = APIRouter()

@router.post("/doctors/", response_model=schemas.DoctorRead)
def create_doctor(doctor: schemas.DoctorCreate, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    if crud.get_doctor_by_email(db= db, doctor_email= doctor.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_doctor(db, doctor)

@router.get("/doctors/{doctor_id}", response_model=schemas.DoctorRead)
def read_doctor(doctor_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    db_doctor = crud.get_doctor(db, doctor_id)
    if db_doctor is None:
        raise HTTPException(status_code=404, detail="Doctor not found")
    return db_doctor

@router.get("/doctors/", response_model=List[schemas.DoctorRead])
def read_doctors(skip: int = 0, limit: int = 10, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    doctors = crud.get_doctors(db, skip=skip, limit=limit)
    return doctors

@router.put("/doctors/{doctor_id}", response_model=schemas.DoctorRead)
def update_doctor(doctor_id: int, doctor: schemas.DoctorUpdate, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    db_doctor = crud.get_doctor(db, doctor_id)
    if db_doctor is None:
        raise HTTPException(status_code=404, detail="Doctor not found")
    return crud.update_doctor(db, doctor_id, doctor, settings.IMAGES_PATH)

@router.delete("/doctors/{doctor_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_doctor(doctor_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    crud.delete_doctor(db, doctor_id, settings.IMAGES_PATH)
    return {"detail": "Doctor deleted"}

@router.get("/doctors/{doctor_id}/image")
def get_doctor_image(doctor_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    doctor = crud.get_doctor(db, doctor_id)
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    image = crud.get_image(doctor_id= doctor_id, images_folder= settings.IMAGE_EXTENSIONS)
    if image:
        return image
    raise HTTPException(status_code=404, detail="Image not found")

@router.post("/doctors/{doctor_id}/image")
def save_doctor_image(doctor_id: int, image: UploadFile = File(...), current_user: schemas.UserRead = Depends(get_current_admin)):
    crud.save_image_file(upload_file= image, doctor_id= doctor_id, images_folder= settings.IMAGES_PATH)
    return image
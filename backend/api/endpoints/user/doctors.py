from fastapi import APIRouter, Depends, HTTPException, status, Form, File, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from typing import List, Optional
from pathlib import Path
from pydantic import EmailStr


from .... import crud, models, schemas
from ...deps import get_db, get_current_user
from ....core.config import settings


router = APIRouter()

@router.get("/doctors/{doctor_id}", response_model=schemas.DoctorRead)
def read_doctor(doctor_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    db_doctor = crud.get_doctor(db, doctor_id)
    if db_doctor is None:
        raise HTTPException(status_code=404, detail="Doctor not found")
    return db_doctor

@router.get("/doctors/", response_model=List[schemas.DoctorRead])
def read_doctors(skip: int = 0, limit: int = 10, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    doctors = crud.get_doctors(db, skip=skip, limit=limit)
    return doctors

@router.get("/doctors/{doctor_id}/image")
def get_doctor_image(doctor_id: int, db: Session = Depends(get_db)):
    doctor = crud.get_doctor(db, doctor_id)
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    image = crud.get_image(doctor_id= doctor_id, images_folder= settings.IMAGE_EXTENSIONS)
    if image:
        return image
    raise HTTPException(status_code=404, detail="Image not found")
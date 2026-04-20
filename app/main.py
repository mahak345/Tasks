# # # from fastapi import FastAPI
# # # from app.datapost import post_data

# # # app = FastAPI()

# # # # @app.get("/Indixpert")
# # # # def check_server_Indixpert():
# # # #     return {"message": "Welcome to Indixpert..."}
 
# # from fastapi import FastAPI
# from app.datapost import post_data   

# # # app = FastAPI()

# # @app.post("/registration")
# # def data_post(name: str, age: int, village: str):
# #     post_data(name, age, village)
# #     return {"message": f"Data inserted successfully {name}"}

# from fastapi import FastAPI
# # from pydantic import BaseModel

# app = FastAPI()

# users = []

# class User(BaseModel):
#     username: str
#     email: str
#     password: str
#     date: str

# @app.post("/signup")
# def signup(user: User):
#     for u in users:
#         if u["email"] == user.email:
#             return {"message": "User already exists "}

#     new_user = {
#         "id": len(users) + 1,
#         "username": user.username,
#         "email": user.email,
#         "password": user.password,
#         "date": user.date
#     }

#     users.append(new_user)

#     return {"message": "Signup successful ", "user": new_user}

# @app.post("/login")
# def login(data: dict):
#     email = data.get("email")
#     password = data.get("password")

#     for u in users:
#         if u["email"] == email and u["password"] == password:
#             return {"message": "Login successful ", "user": u}

#     return {"message": "Invalid email or password "}




from fastapi import FastAPI
from pydantic import BaseModel
# from app.datapost import post_data

app = FastAPI()

users = []

class User(BaseModel):
    username: str
    email: str
    password: str
    date: str


# @app.post("/registration")
# def data_post(name: str, age: int, village: str):
#     post_data(name, age, village)
#     return {"message": f"Data inserted successfully {name}"}


@app.post("/signup")
def signup(user: User):
    for u in users:
        if u["email"] == user.email:
            return {"message": "User already exists"}

    new_user = {
        "id": len(users) + 1,
        "username": user.username,
        "email": user.email,
        "password": user.password,
        "date": user.date
    }

    users.append(new_user)

    return {"message": "Signup successful", "user": new_user}


# @app.post("/login")
# def login(data: dict):
#     email = data.get("email")
#     password = data.get("password")

#     for u in users:
#         if u["email"] == email and u["password"] == password:
#             return {"message": "Login successful", "user": u}

#     return {"message": "Invalid email or password"}


@app.post("/login")
def login(data: dict):
    email = data.get("email")
    password = data.get("password")

    for u in users:
        if u["email"] == email and u["password"] == password:
            return {"message": "Login successful", "user": u}

    return {"message": "Invalid email or password"}
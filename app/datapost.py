# def post_data(name: str, age: int, village: str):
#     print(f"Name: {name}, Age: {age}, Village: {village}")
def post_data(users):
    return {
        "message": "Users fetched successfully",
        "data": users
    }
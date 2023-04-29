from typing import Union

from fastapi import FastAPI

import requests

app = FastAPI()

responses = []

for i in range(1000):
    response = requests.get("")
    responses.append(response.content.decode("utf-8"))

@app.get("/")
def read_root():
    return responses
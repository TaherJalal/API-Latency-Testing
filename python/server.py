from typing import Union

from fastapi import FastAPI

import requests

app = FastAPI()

responses = []

for i in range(1000):
    response = requests.get("https://api.themoviedb.org/3/discover/movie?api_key=010b85a5594b639d99d3ea642bd45c74&language=en-US&sort_by=original_title.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
    responses.append(response.content.decode("utf-8"))

@app.get("/")
def read_root():
    return responses
import pandas as pd
from dotenv import load_dotenv
import os
import json

def get_markers():
    load_dotenv()
    key = "SHEET_ID"
    url = f'https://docs.google.com/spreadsheets/d/{os.getenv(key)}/export?format=csv'
    column_names = ["timestamp", "longitude", "latitude", "title", "description", "altitude", "directions", "img", "safety"]
    return pd.read_csv(url, names=column_names, header=0).to_json(orient="records")

def get_total_contributions():
    return len(json.loads(get_markers()))
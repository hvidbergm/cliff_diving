import pandas as pd
from dotenv import load_dotenv
import os

def get_markers():
    load_dotenv()
    key = "SHEET_ID"
    url = f'https://docs.google.com/spreadsheets/d/{os.getenv(key)}/export?format=csv'
    column_names = ["timestamp", "lng", "lat", "title"]
    return pd.read_csv(url, names=column_names, header=0).to_dict('records')

def get_total_contributions():
    return len(get_markers())
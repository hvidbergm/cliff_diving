from flask import Flask, render_template
from utils.get_data import get_markers, get_total_contributions

app = Flask(__name__)

@app.route('/')
def index():
    total_contributions = get_total_contributions()
    return render_template('index.html',
                           total_contributions=total_contributions)

@app.route('/markers')
def markers():
    return get_markers()

if __name__ == '__main__':
    app.run(debug=True)
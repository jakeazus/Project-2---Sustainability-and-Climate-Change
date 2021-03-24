from sqlalchemy import create_engine
from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
connection_string = "postgres:postgres@localhost:5432/climate_change_db"
engine = create_engine(f'postgresql://{connection_string}')

connection = engine.connect()
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/names")
def names():

    result = connection.execute("select * from carbon_dioxide")
    for row in result:
        print(row)


if __name__ == "__main__":
    app.run(debug=True)
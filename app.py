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

@app.route("/Country_Names")
def names():

    result = connection.execute("""SELECT country_code, country_name, "2015" FROM carbon_dioxide ORDER BY "2015" DESC LIMIT 20;""")
    data = []
    for row in result:
        my_dict = {
            "country_code":row[0],
            "country_name": row[1],
            "2015":float(row[2])
        }
        data.append(my_dict)
        print(row)
    return(jsonify(data))

if __name__ == "__main__":
    app.run(debug=True)
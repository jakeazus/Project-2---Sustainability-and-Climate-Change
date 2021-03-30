from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
connection_string = "postgres:270504@localhost:5432/climate_change_db"
engine = create_engine(f'postgresql://{connection_string}')

connection = engine.connect()
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################


@app.route('/')
def index():
    return render_template('welcome.html')


@app.route("/top20CO2")
def TopC02():

    result = connection.execute(
        """SELECT country_code, country_name, "2015", color FROM carbon_dioxide_top20 ORDER BY "2015" DESC LIMIT 20;""")
    data = []
    for row in result:
        my_dict = {
            "country_code": row[0],
            "country_name": row[1],
            "2015": float(row[2]),
            "color": row[3]

        }
        data.append(my_dict)
        print(row)
    return(jsonify(data))


@app.route("/top20GDP")
def TopGDP():

    result = connection.execute(
        """SELECT country_code, country_name, color, "2015" FROM gdp ORDER BY "2015" DESC LIMIT 20;""")
    data = []
    for row in result:
        my_dict = {
            "country_code": row[0],
            "country_name": row[1],
            "country_gdp": float(row[3]),
            "color": row[2]
        }
        data.append(my_dict)
        print(row)
    return(jsonify(data))


@app.route("/top20Energy")
def TopRenewableEnergy():

    result = connection.execute(
        """SELECT country_code, country_name, color, "2015" FROM renewable_energy ORDER BY "2015" DESC LIMIT 20;""")
    data = []
    for row in result:
        my_dict = {
            "country_code": row[0],
            "country_name": row[1],
            "country_energy": float(row[3]),
            "color": row[2]
        }
        data.append(my_dict)
        print(row)
    return(jsonify(data))


if __name__ == "__main__":
    app.run(debug=True)


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

@app.route("/Top 20 Countries by CO2 Emission")
def TopC02():

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

@app.route("/Top 20 Countries by GDP")
def TopGDP():

    result = connection.execute("""SELECT country_code, country_name, "2015" FROM gdp ORDER BY "2015" DESC LIMIT 20;""")
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

@app.route("/Top 20 Countries by Urban Population (In Thousands)")
def TopUrbanPopulation():

    result = connection.execute("""SELECT country_code, country_name, "2015" FROM urban_population ORDER BY "2015" DESC LIMIT 20;""")
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

@app.route("/Top 20 Countries by Renewable Energy")
def TopRenewableEnergy():

    result = connection.execute("""SELECT country_code, country_name, "2015" FROM renewable_energy ORDER BY "2015" DESC LIMIT 20;""")
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

@app.route("/Top 10 Countries With Least CO2 Emission")
def BottomC02():

    result = connection.execute("""SELECT country_code, country_name, "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"
     FROM carbon_dioxide ORDER BY "2015" ASC LIMIT 10;""")

    data = []
    for row in result:
        my_dict = {
            "country_code":row[0],
            "country_name": row[1],
            "2000":float(row[2]),
            "2001":float(row[3]),
            "2002":float(row[4]),
            "2003":float(row[5]),
            "2004":float(row[6]),
            "2005":float(row[7]),
            "2006":float(row[8]),
            "2007":float(row[9]),
            "2008":float(row[10]),
            "2009":float(row[11]),
            "2010":float(row[12]),
        }
        data.append(my_dict)
        print(row)
    return(jsonify(data))



if __name__ == "__main__":
    app.run(debug=True)
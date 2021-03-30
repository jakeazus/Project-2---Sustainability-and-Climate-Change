# Project-2-Sustainability-and-Climate-Change
This project focuses on Climate Change factors for the leading 20 countries CO2 Emissions from 2015. We analyzed world wide CO2 emissions, GDP, and Renewable Energy (% to total energy) to see if there were any consistencies in these countries. Finally, we developed an flask app to connect our data stored in SQLPOstgres which showcases a visual dashboard and conclusive findings.  

# Findings


# Top 20 Countries with highest CO2 Emissions: 
*  China
* United States
* India
* Russian Federation
* Japan
* Germany
* Iran, Islamic Rep.
* Saudi Arabia
* Korea, Rep.
* Canada
* Indonesia
* Brazil
* Mexico
* South Africa
* United Kingdom
* Australia
* Turkey
* Poland
* Thailand
* Spain

# Process 
* Narrowed down visualization inspiration to enhance our data findings 
* [Cleaned 3 csv's](data/Clean_Data.ipynb)  
* Located the top 20 Countries with the highest CO2 Emissions and [parsed through each cleaned csv to filter the top 20 countries](data/climate_change.ipynb)
* Loaded our new tables into [Postgres](SQL_DATA/Table_script.sql)
* Created [sqlalchemy routes](app.py) and [javascript d3 visualizations](static/js/climate.js) to append the graphs to the browser 
* Developed an [html page](templates/welcome.html)  and [css](static/css/style.css) to enhance the user's experience. 

# Visuals 
We created a dashboard of visuals using [d3, plotly] to showcase our findings. 
* Pie chart 
* Bar Chart 

# Data Sources 
* CO2 by country (1960-2016) - https://data.worldbank.org/indicator/EN.ATM.CO2E.KT?end=2018&most_recent_value_desc=true&start=1960
* GDP by country (1960-2016)- https://data.worldbank.org/indicator/NY.GDP.PCAP.KD.ZG?view=chart
* Renewable energy consumption (% of total final energy consumption) (1990-2015)- https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?view=chart


Team members: Anna Bowers, Mario Lozano, Jake Azus, Justine Sbarra, and Ivana Korak

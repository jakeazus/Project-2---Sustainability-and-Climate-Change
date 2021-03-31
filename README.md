# Project-2-Sustainability-and-Climate-Change
This project focuses on Climate Change factors for the leading 20 countries CO2 Emissions from 2015. We analyzed world wide CO2 emissions, GDP, and Renewable Energy (% to total energy) to see if there were any consistencies in these countries. Finally, we developed an flask app to connect our data stored in SQLPOstgres which showcases a visual dashboard and conclusive findings.  

# Findings
China and America make up more than ½ of CO2 emissions than the next 18 leading countries. China also has the 2nd largest gross domestic product in 2015, with clear indications that higher GDP results in higher CO2 emissions. Despite this, although America is the 2nd largest CO2 producing country, they are 9th in GDP and 14th in renewable energy sources. Brazil,  Indonesia, and India lead the charge in renewable energy as more than one-third of their energy is sourced sustainably. In juxtaposition, Brazil has the lowest GDP out of the top 20 countries, concluding that GDP and renewable energy emphasis are not positively correlated. Saudia Arabia and Iran have little to no renewable energy sources, likely a result of the emphasis on fossil fuel production. 

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

![Screen Shot 2021-03-30 at 5 29 45 PM](https://user-images.githubusercontent.com/13200513/113078106-72197d00-91a0-11eb-891d-1131974cd009.png)

Team members: Anna Bowers, Mario Lozano, Jake Azus, Justine Sbarra, and Ivana Korak

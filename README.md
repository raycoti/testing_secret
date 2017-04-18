# **Weather Checker**
Simple to use weather application! Just type in any location to get:
* an Area chart of past and future daily/hourly statistics on temperature, rain probability, humidity and cloud coverage of that location.
* Daily Summaries of the upcomming week's forcast for that location.
* Current day forcast for that location hovering on its appropriate location on google maps.


# Getting started

 ## Prerequisites: 
 1) Set Darksky api key as a global enviornment variable. Linux:
```
  export DS_API_PASSWORD='[key]'

``` 
2) Set GoogleMaps api key in index.html:

```
 /maps/api/js?key=[KEY]&callback=initMap
```
## Installation
```
npm install
npm run build
npm start
```
## Tests
```
npm run test
```
This runs all tests in the folder tests

# React/Redux Overview

# Chart
### Reducer
#### State
  * **current**  the data type being viewed
  * **hourly** The hourly data for the current location
  * **daily** The daily data for current location
  * **view** Boolean for whether to render chart data
### Action Creators
  * **setChartView**(view): Sets view to Boolean passed in 
  * **setCurrentChart**(chartType): Sets current to String name passed in.
  * **setDailyChart**(dailyData): Sets daily data array to data passed in.
  * **setHourlyChart**(hourlyData): Sets hourly data array to data passed in
  * **addDailyHistory**(historyData): Concatenates data passed in to daily data array.
  * **setData**(data,type): dispatches either setDailyChartData or setHourlyChartData based on type.
  #### other functions
  * **formatData**(data,type):Formats data based on type.
### Components
  * **ChartContainer**: sends appropriate data to weatherChart based on current.
  * **weatherChart**: renders a rechart chart with data passed in from ChartContainer. Examples of conditional rendering for potential toggling of data points. 

# Location
### Reducer
#### State
* **location** Name of current location
* **lat** latitude of current location
* **long** longitude of current location
* **searches** an array of past searches
### Action Creators
* **setLocation**(location): sets current location name to location name passed in.
* **setLatLong**(position): sets current lat and long to position passed in. position is an object with properties lat and long.
* **addToSearch**(name):concatenates name to the front of the array of searches
* **setSearches**(searchesArr): sets the searches array to the array passed in.
* **getSearches**(): makes an axios request to fetch the queries associated with the user's browswer session. Dispatches setSearches when resolved.
* **getLocation**(location): makes an axios request to pull geolocation data from the location name passed in. dispatches getForcast, setLocation and setLatLong with the data passed in. It also dispatches setChartView to hide the chart when data is being fetched.  

### Components

* **weatherContainer**: container for weatherForm, handles maping dispatches to appropriate functions, getting previous searches made by a user, and simple form submit validation such as not allowing users to make an empty search.
* **weatherForm**: form for searches. renders dropdown box for previous 10 searches, attaches functions from weatherContainer to appropriate eventHandlers. 

### Server Routes 

* **'api/location'**:  when the app makes a post request to this route with a location name an additional axios request will be made to GoogleMaps geocode api. When resolved axios request is resolved the route returns an object with properties location and name. 
* **'api/queries'**: when the app makes a request to this route it returns an array of previous searches associated with the session. 

# Weather
### Reducer
#### State
* **forcast** Forcast summary
* **daily** Array of daily forcast information
* **hourly** Array of hourly forcast information
### Action Creators
* **setWeather**(forcast): sets forcast summary to forcast passed in.
* **setDaily**(dailyData): sets array of daily forcasts to the data passed in. 
* **setHourly**(hourlyData): sets array of hourly forcasts to the data passed in. 
* **getHistoryForcast**(location, times): makes an axios requests to get weather data of given location and times. When those requests resolve, it then dispatches addDailyHistory with the new data array and setChartView to true.
* **getForcast**(location): makes an axios request to get weather data of given location. dispatches setWeather, setDaily,setHourly and setData with data retrieved. When these all resolve it then dispatches getHistoryForcast. Also centers google maps to the location passed in. 
 #### other functions
* **formatHistory**(historyData): formats array of arrays to one array. This is done because each timeMachine request resolved to an array.  
* **getPastTimes**(currentTime,days): returns an array of UNIX time stamps of past days.
* **setImageMap**(forcast): adds basic summary to google maps infoWindow.
### Components
* **dayView** renders out a dayWeather component for each day in the daily forcast array. 
* **dayWeather** displays summary, image, high and low temperature info from the day object passed in from dayView. 

# Tools
## [Google Maps](https://developers.google.com/maps)
  Google maps was used for geolocation and the map itself. The map is set up in index.html, it is made availabe to the rest of our application by adding pointers to the window: **window.map**, **window.infoWindow**
## [Dark Sky API](https://darksky.net/dev/)
  Dark Sky API -formally forecast.io- is used for obtaining weather data. 
## [Recharts](http://recharts.org/#/en-US/) 
  an npm library with charts that are react components.

Screen 1: 

1) Hardcoded the city values in JSON file(City list is more than 20K Records)
2) Created a drop down with the json file
3) Drop down takes time to load - you have to wait for some time for drop down to show up and select data
4) THe slowness in Dropdown can be improved in tow ways
    1) using "cdk virtual scroll viewport" - tried implementing this but couldn't do due to time constraint
    2) Using two Dropdown. First dropdown is used to select Country(Onlu 25o+ COuntries are Present). Based on the Country selection Second drop down will be populated with filtered Cities

Screen 2:

1) Didn't Implement Search bar on top. Since the real api does not contain any array values in it as like in real api's

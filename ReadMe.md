# Drip Me Out

Previous version: **https://hashirakhan.github.io/CSCI-499-Drip-Me-Out/#/**

To install the libraries used in this project, run `npm install`\
To run the latest version, run `npm start`

**Back-end**: https://github.com/rtieu10/CSCI-499-Drip-Me-Out-backend

  For back-end integration, run back-end server using `node index.js`

  **Note**: Since backend has not been deployed, you will need your own OpenWeatherMap API key for weather-related functionalities

# Design

![Design](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/Design.gif)
![Design](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/DesignScreenshot.png)

# Final Product

## Login Page
![Login](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/loginpage.png)

This is the login page, which allows users to login to their account on Drip Me Out. If the user does not have an account, they can navigate to the sign up page instead.

## Sign Up Page
![Signup](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/signup.png)

The sign up page allows users to create an account on Drip Me Out. The user will be asked to provide some personal information such as their first and last name, email, password, and a zipcode. The zipcode will later be used to calculate the weather in user's local area.

## Home Page
![Home](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/home.png)

This is the page users first see when they login to Drip Me Out. The home page allows them to navigate to either the generate, customize, or closet page. In the navigation bar, they can also navigate to edit profile to make any changes to their personal information stored in the account.

## Edit Profile Page
![Profile](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/profilepage.png)

On the edit profile page, the user has the ability to edit their first and last name, their email, or change their temperature preference between farenheit and celsius. The user can change their personal information or temperature preference by typing the updated information into the text fields, or interacting with the checkbox. If the user edits their zipcode, the application will provide outfits based on the weather in the updated zipcode. By pressing the change button, the user's information and personal preferences will be updated.

## Generate Outfit Page
![Generate](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/generateoutfit.png)

On the generate outfit page, the user can generate a outfit based on the clothes in their closet. The user can also filter by temperature, weather condition, color, or accessories. The filters that are checked off will be taken into consideration when the outfit is being generated. If the user likes one of the generated outfits they have the ability to save the outfit by pressing the save outfit button.

## Save an Outfit
![Save](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/savemodal.png)

When the user tries to save an outfit, a modal will pop up where they will be asked to provide a name for the outfit. This will allow users to distinguish between their saved outfits, so they can access them at a later time. After pressing the save button, the outfit information is saved in the backend.

## Customize Outfit Page
![Customize](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/customizeoutfit.png)

The user will also be given the ability to customize their own outfits based on the clothes they have uploaded to Drip Me Out. Currently, the user is given the ability to choose a top, bottom, and shoes to customize the outfit. If they like the outfit they have customized, they can also save the outfit for future reference. When pressing the save outfit button, the user will be taken to a screen with the save outfit modal where they will be asked to name their customized outfit.

## Select Item for Customize Outfit
![SelectItem](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/selectitem.png)

When customizing an outfit, the user has the ability to customize three layers of the outfit. When the user clicks on a box to customize a layer the user will be taken to a different page where they can choose from items in their closet. After pressing on an image, the user can hit the select button to choose the piece of clothing for the customized outfit. After selecting the item, the user will be redirected back to the customize outfit page. 

## Closet Page

![Closet](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/closet.png)

On the closet page, the user can view all the pieces that they have uploaded to Drip Me Out. The closet page also includes filters that can help users view certain items in their closet. From the closet page, the user can also navigate to the view saved outfits page, add item page, or the view/edit page.

## Saved Outfits Page
![Saved-Outfits](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/savedoutfit.png)

The saved outfit page displays all the outfits the user has saved to the application. The left side displays the name of all the saved outfits, and the x button next to each outfit allows the user to delete the saved outfit. By clicking on the outfit name, the pieces of clothing in the outfit will be displayed to the user.

## Add Item Page
![Add-Item](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/additem.png)

The add item page allows users to upload images of clothing items in their closet. They will also be asked to provide more information on the piece of clothing such as its name, the category it falls into, and the color. Once the image file is uploaded, and the user presses the upload image button, they can fill out the information regarding the clothing item and save it to their personal closet on the app.

## View/Edit Item Page
![View-Edit](https://github.com/HashirAKhan/CSCI-499-Drip-Me-Out/blob/main/ReadMeAssets/view-edit.png)

The view/edit page allows users to edit the information they have inputted for a clothing item. On this page, they can update the clothing label, the category, and the color of the item. After pressing the save button, this information will be updated on the backend. The user can also remove this item from the closet by pressing the remove button for the item.

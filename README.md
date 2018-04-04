<p align="center">
  <img alt="GitHub Logo" src="public/assets/images/infamous_logo_black.png" width="100%" />
  <h3 align="center">Website for Infamous Public Relations</h3>
  <p align="center">Visit <a href="https://infamouspr.com/">https://infamouspr.com</a></p>
</p>

# Introduction

This is an application for Infamous PR, a music public relations company, that allows them to connect with prospective clients, display current and past client roster, and blog noteworthy media coverage. Completely designed, built, and maintained by myself.

## Features

* Public facing UI for displaying client news, client roster, company info/servcies, and contact information.
* Completely custom CMS for Infamous employees to create, update, and delete news stories, client profiles, and site information.
* Firestore database to store news stories, client data, and site information.
* Firebase Storage Bucket to handle image and file uploads.
* Cloud functions to handle backend functionality, thus resulting in a serveless application.

## Technology Used

* React / Redux 
* React Router
* Webpack
* CSS Modules
* Firebase Authentication
* Firestore Database
* Firebase Storage Buckets
* Google Cloud Functions
* Imagemagick

## Noteable Achievements

* Completely serverless, thus resulting in a fast and cheap solution for a website/custom CMS for a small business.
* To improve loading speeds on client page (60+ photos), a cloud function is used to intercept all image uploads, create a thumbnail, and then save both files to database. A combination of this and lazy loading allows for fast load times on an image heavy page.
* Fully mobile-responsive.
* Simple technical SEO to assist with link-sharing in Facebook and Google search information.
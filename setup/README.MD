# Setup
Open your Terminal application and navigate to your `~/code/ga/labs` directory:

```
cd ~/code/ga/labs
```

Navigate to [GitHub](https://github.com/) and create a new repository named **intro-to-express-lab**.

* Make sure the repo is set to `public`
* You do not need a `README.md`
* You do not need a `.gitignore`

Using the `Quick Setup` option, clone your newly created repo into your `~/code/ga/labs` directory with the `git clone` command:

```
git clone https://github.com/<your-username>/intro-to-express-lab.git
```
    Note: In the link above, where it says `<your-username>`, you should see the username from your GitHub account.

Next, `cd` into your new cloned directory, `intro-to-express-lab`:

```
cd intro-to-express-lab
```

```
touch server.js
npm init -y
npm install express
```

Open the directory in your code editor:

```
code .
```

1. Define all of your code in a `server.js` file.

2. The express application should listen for requests on port 3000.
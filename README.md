
## Solving issue with Gemfile.lock
I had issues with the Gemfile.lock and with the next error
```
Your bundle only supports platforms ["x86_64-darwin-19"] but your local
platform is x86_64-linux. Add the current platform to the lockfile with
`bundle lock --add-platform x86_64-linux` and try again.
```

It's been solved by removing my Gemfile, bundling and running `bundle lock --add-platform x86_64-linux` \
[A good article about it here](https://www.moncefbelyamani.com/understanding-the-gemfile-lock-file/) \
See also [DHH video](https://youtu.be/mpWFrUwAN88) (look about 30min45s)

## Deploy & migrate

First `heroku login` \
Then `heroku create` \
Now run `git push heroku master` \
If you face some issue you can try `heroku run rails console` to find out more
You can check it added a remote with `git config --list --local | grep heroku`

## Git Fundamentals!

Git allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. It is a *distributed version control system*.

Helps with two people working on one file. Git will attempt to merge the file.
 
- Created by Linus Torvalds. 
- git help [command name]

## Setting up Git
Your first step is to setup your username, your email so that way you can take credit for your changes!

`git config --global user.name "Danny Allegrezza"`
`git config --global user.email danny@dannyallegrezza.com`
`git config --global color.ui true`


## Workflow for git
Here is an example of a users workflow when using Git

1. Danny creates a README.txt file
2. Add file to the staging area
3. Commit changes (`git commit -m "created the initial readme file"`)

1. Danny modifies README.txt file & add LICENSE
2. Add both files to staging area
3. Commit changes (`git commit -m "updated readme and added license"`)



## Initializing your First Repo
1. Start in a directory
2. To initialize a Git repository here, type the following command ```git init```

```git status``` : shows the status of your repository and any changes that have occurred.

If you have added files and then do a git status, git will show you the 

### Quick Advice ```git _____```
**untracked** files (generally in red).

**staged:**
Files are ready to be committed.

**unstaged:**
Files with changes that have not been prepared to be committed.

**untracked:**
Files aren't tracked by Git yet. This usually indicates a newly created file.

**deleted:**
File has been deleted and is waiting to be removed from Git.

**add all**: 
You can also type ```git add -A . ``` where the dot (.) stands for the current directory, so everything in and beneath it is added. The -A ensures even file deletions are included. You can also use ```git add .```

**git reset:**
You can use ```git reset <filename>``` to remove a file or files from the staging area.

**More useful logs:**
Use ```git log --summary``` to see more information for each commit. You can see where new files were added for the first time or where files were deleted. It's a good overview of what's going on in the project.

## Adding files
First, we need to do a ```git add ``` and **stage** our files. Once we've got everything ready to go, we can do our commit. 

``` git commit -m 'My message summary here'```

If we want, we can view the Log by typing ``` git log```. Think of the Log as a journal of all of the commits that have taken place to the repository.

Keep in mind these are on our **local** repository. If we want to push these to a **Remote** repository, such as one hosted on GitHub.com or BitBucket, we would need to do the following:

``` git remote add origin https://github.com/my-account/mygit.git ```

###Let's break that down further:
This command takes a *remote name* and a *repository URL*

```git remote add``` - the command to add a new remote repository

```origin``` :  this is what we happened to name our remote repo. "origin"

**git remote:**
Git doesn't care what you name your remotes, but it's typical to name your main one origin.

It's also a good idea for your main repository to be on a remote server like GitHub in case your machine is lost at sea during a transatlantic boat cruise or crushed by three monkey statues during an earthquake.

### Pushing Remotely
The push command tells Git where to put our commits when we're ready. To push our local changes to our **origin** repo (on GitHub):

```git push -u origin master```

###Let's break that down...
``` git push ``` This is the "push" command

``` -u ``` : The **-u** tells Git to remember the parameters, so the next time we can simply run ```git push``` and Git will know what to do.

``` origin ```: The name of our remote. In our case, this is "origin"

``` master ```: The default local branch name is master

### Pulling Remotely
Let's pretend that some time has passed. We've invited other people to our GitHub project who have pulled your changes, made their own commits, and pushed them. We can check for changes on our GitHub repository and pull down and new changes by running: 

``` git pull origin master ```

## Differences
What happens when there are differences from the local machine and the remote repo? We can use a ```git diff``` command to take a look at what is DIFFERENT from our last commit by using the **git diff** command.

In this example, we want the diff of our most recent commit, which we can refer to using the **HEAD** pointer

```git diff HEAD```


## Differences in Staged Files
``` git diff --staged```


## Resetting the Stage
You can unstage files by using the ```git reset``` command. Ex:

``` git reset myFile.txt ```



## Undo
**git reset** does unstaging files, but it doesn't remove them. If you REALLY want to go back in time and UNDO, you can use ```git checkout <target>```. This will get rid of all of the changes since the last commit.

```git checkout --octocat.txt```

## Branches
Branches are used when developers are working on a feature or bug. They'll often create a copy (aka. **branch**) of their code so that they can make separate commits to. Then, when they are done they can MERGE this branch back into their main **master** branch.

```git branch dev_clean_up```

This would create a new branch called dev_clean_up

You can type ```git branch``` to show all local branches

### To switch between branches
You can switch between branches using the **git checkout <branch>** command. So, let's switch to the **dev_clean_up** branch.

``` git checkout clean_up```

## Cleanup time! Removing all the things
Now we are in the `dev_clean_up` branch. We can remove files with `git rm`, which will not only remove the actual files from disk, but will also stage the removal of the files for us.

ex: remove all text files

`git rm '*.txt'`

then let's do a git status

## NICE TO KNOW:
### The '-a' option
If you happen to delete a file without using 'git rm', you'll find that you STILL HAVE TO 'git rm' the deleted files from the working tree. You can save this step by using the '-a' option on `git commit`, which auto removes deleted files with the commit.

ex:

`git commit -am "Deleting stuff"`

## Switching back to the Master Branch
So now we've edited the branch and we want to switch back to the **master** branch so you can copy (or **merge**) your changes from the **dev_clean_up** branch back into the **master** branch.

`git checkout master` - this says check me out of my current branch and place me in the 'master' branch.

NOTE: If you're hosting your repo on GitHub, you can do something called a **pull request**. A pull request allows the boss of the project to look through your changes and make comments before deciding to **merge** in the change. It's a really great feature that is used all the time for remote works and open-source projects.

## Preparing to Merge
The final step! Now that we are back into our master branch it is time to merge in the changes from devcleanup branch.

` git merge dev_clean_up`

## Keeping things clean
Now that we have successfully merged in our branch, it's usually a good idea to clean up after yourself. Since we are done with the `dev_clean_up` branch, we do not need it anymore. 

You can use `git branch -d <branch name>` to delete a branch. 

`git branch -d dev_clean_up`

## The final Push!
The final step. Now we need to **push** everything we've been working on locally to your **remote repository**.

`git push`

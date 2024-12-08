removed this from package.json

"start": "node index.js",
    "dev": "nodemon index.js""# MovieReview" 

# Git Commands Cheat Sheet

This guide provides a comprehensive list of Git commands to help you manage your repositories.

---

## **Setup and Configuration**

| Command                        | Description                                        |
|--------------------------------|----------------------------------------------------|
| `git config --global user.name "Your Name"` | Set your name for all repositories.             |
| `git config --global user.email "your_email@example.com"` | Set your email for all repositories.           |
| `git config --list`            | View your current Git configuration.              |
| `git config --global core.editor "editor_name"` | Set your preferred text editor (e.g., `vim`, `code`). |

---

## **Initializing a Repository**

| Command                  | Description                                    |
|--------------------------|------------------------------------------------|
| `git init`               | Initialize a new Git repository in the current directory. |
| `git clone <repository_url>` | Clone an existing repository.             |

---

## **Basic Workflow**

| Command                          | Description                                    |
|----------------------------------|------------------------------------------------|
| `git status`                     | Check the status of your working directory.   |
| `git add <file>`                 | Stage a file for commit.                      |
| `git add .`                      | Stage all changes in the current directory.   |
| `git commit -m "commit message"` | Commit staged changes with a message.         |
| `git commit -am "message"`       | Add and commit changes in one step.           |
| `git push`                       | Push commits to the remote repository.        |
| `git pull`                       | Fetch and merge changes from the remote repository. |

---

## **Branching**

| Command                           | Description                                     |
|-----------------------------------|-------------------------------------------------|
| `git branch`                      | List all branches.                             |
| `git branch <branch_name>`        | Create a new branch.                           |
| `git checkout <branch_name>`      | Switch to a branch.                            |
| `git checkout -b <branch_name>`   | Create and switch to a new branch.             |
| `git merge <branch_name>`         | Merge a branch into the current branch.        |
| `git branch -d <branch_name>`     | Delete a branch (locally).                     |
| `git push origin --delete <branch_name>` | Delete a branch (remotely).                 |

---

## **Viewing and Undoing Changes**

| Command                        | Description                                        |
|--------------------------------|----------------------------------------------------|
| `git log`                      | View commit history.                              |
| `git log --oneline`            | View commit history in a compact format.          |
| `git diff`                     | View changes in the working directory.            |
| `git diff <file>`              | View changes in a specific file.                  |
| `git checkout <file>`          | Discard changes in a file.                        |
| `git reset HEAD <file>`        | Unstage a file.                                   |
| `git reset --soft HEAD~1`      | Undo the last commit but keep changes staged.     |
| `git reset --mixed HEAD~1`     | Undo the last commit and unstage changes.         |
| `git reset --hard HEAD~1`      | Undo the last commit and discard all changes.     |

---

## **Remote Repositories**

| Command                                 | Description                                      |
|-----------------------------------------|--------------------------------------------------|
| `git remote -v`                         | View remote repositories linked to your project. |
| `git remote add origin <url>`           | Link a remote repository.                       |
| `git push -u origin <branch_name>`      | Push a branch and set the upstream remote.       |
| `git fetch`                             | Fetch changes from the remote repository.        |
| `git pull origin <branch_name>`         | Pull changes from a specific branch.             |

---

## **Stashing Changes**

| Command                    | Description                                    |
|----------------------------|------------------------------------------------|
| `git stash`                | Save uncommitted changes temporarily.         |
| `git stash list`           | View all stashed changes.                     |
| `git stash apply`          | Reapply the most recent stash.                |
| `git stash drop`           | Remove the most recent stash.                 |
| `git stash pop`            | Reapply and delete the most recent stash.     |

---

## **Tagging**

| Command                              | Description                                    |
|--------------------------------------|------------------------------------------------|
| `git tag`                            | List all tags in the repository.              |
| `git tag <tag_name>`                 | Create a new tag.                             |
| `git tag -a <tag_name> -m "message"` | Create an annotated tag.                      |
| `git push origin <tag_name>`         | Push a tag to the remote repository.          |
| `git push origin --tags`             | Push all tags to the remote repository.       |

---

## **Advanced Commands**

| Command                               | Description                                   |
|---------------------------------------|-----------------------------------------------|
| `git cherry-pick <commit_hash>`       | Apply a specific commit to the current branch.|
| `git rebase <branch_name>`            | Reapply commits on top of another branch.     |
| `git reflog`                          | View a log of all reference updates.          |
| `git blame <file>`                    | Show who last modified each line of a file.   |

---

## **Cleaning Up**

| Command                      | Description                                        |
|------------------------------|----------------------------------------------------|
| `git clean -n`               | Show files that would be removed by a clean.      |
| `git clean -f`               | Remove untracked files.                           |
| `git clean -fd`              | Remove untracked files and directories.           |

---

## **Git Submodules**

| Command                                  | Description                                    |
|------------------------------------------|------------------------------------------------|
| `git submodule add <repository_url>`     | Add a submodule to your repository.           |
| `git submodule update --init --recursive`| Initialize and update submodules.             |
| `git submodule foreach git pull`         | Update all submodules.                        |

---

## **Git Aliases**

| Command                                          | Description                                   |
|--------------------------------------------------|-----------------------------------------------|
| `git config --global alias.<alias_name> "<command>"` | Create a shortcut for a Git command.        |
| Example: `git config --global alias.st status`   | Alias `git st` for `git status`.             |

---



Kwitter backend

1. Environment Setup:

    * Install Python 3.6.9 on your system, if not already present. You can install it using the steps mentioned below:-
        * For Linux users:-
            * sudo apt update
            * sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget libsqlite3-dev
            * wget https://www.python.org/ftp/python/3.6.9/Python-3.6.9.tar.xz
            * tar -xf Python-3.6.9.tar.xz
            * cd Python-3.6.9
            * ./configure --enable-optimizations
            * sudo make altinstall

         * For OSX:-
            * Download and install python 3.6.9 using the link below.
                * https://www.python.org/ftp/python/3.6.9/python-3.6.9-macosx10.9.pkg

    * Create a virtual env with python 3.6.9
    * execute `pip install -r requirements.txt` to setup dependencies
    * Install Sqlite3

2. Run migrations
    * `python manage.py migrate`

3. Make Admin account
    * `python manage.py createsuperuser`

4. Run following command for runserver:
    python manage.py runserver


Kwitter frontend

1. Run the following command:
    npm install
2. serve app:
    ng serve
FROM readytalk/nodejs

RUN apt-get update
RUN cd / 
RUN apt-get install -y python python-pip git python-dev libffi-dev libssl-dev
RUN git clone https://github.com/tejado/pgoapi.git pokemon
RUN pip install 'requests[security]'
RUN cd ./pokemon && for r in `cat requirements.txt`; do pip install $r; done
WORKDIR /app
ADD package.json /app/
RUN npm install
ADD . /app

CMD []
ENTRYPOINT ["npm", "start"]
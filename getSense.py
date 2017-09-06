from grovepi import *
from time import sleep

temp = 0.01
hum = 0.01
port = 7
[temp,hum] = dht(port,0)
for x in range(0,10):
    sleep(1)
    print(temp)
    print(hum)
    f = open('/var/www/html/sense.json','w')
    f.write('{"temp":"'+str(temp)+'","hum":"'+str(hum)+'"}')
    f.close()

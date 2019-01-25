inputArray = [25, 57, 37,48, 12, 92, 86, 33]
Y = [-1]*len(inputArray)
h=0  #largest index
t=0  #smallest index
s=0
l=0
Y[0]=inputArray[0]



def insertionSort():
    for i in range(1, len(inputArray)):   
        key = inputArray[i] 
        j = i-1
        while j >=0 and key < inputArray[j] : 
                inputArray[j+1] = inputArray[j] 
                j -= 1
        inputArray[j+1] = key 

def slFinder (value):
    global s
    global l
    s=0
    l=0
    for i in range(0,len(Y)):
        if(Y[i]<value and Y[i]!=-1):
            s+=1
        elif(Y[i]>value):
            l+=1
    #print(s,l)
    return s,l
        
def shiftLeft(value):
        pass

def shiftRight(value):
        #print "inside shiftright","s=",s
        Y.insert(s,value)
        del Y[Y.index(-1)]
        

def insertValue (value):
    s,l = slFinder(value)
    #print("inside insertVlaue func")
    
    #print "value=",value,"s=",s,"l=",l
    global t
   # print "t=",t

    if(value>Y[t] & Y[t+1]==-1):
        Y[t+1]=value
        t+=1
    else:
        if(s>=l):
            shiftRight(value)
        elif (s<l):
            shiftLeft(value)
    


for item in inputArray[1:]: 
    insertValue(item)
    print (Y)
    
     
'''

    @description : Plot and track an Itunes playlist

'''

import plistlib

filaname = 'Library.xml'

def findDuplicates(filename):
    print "Finding duplicates for in {}".format(filename)

    #Read the  XML playlist and select the key tack
    plist =  plistlib.readPlist(filename)
    tracks = plist['Tracks']

    #Create dictionary and cylcle through the tracks
    #held
    trackNames = {}
    for trackId, track in tracks.items():
        try:
            name = track["Name"]
            duration = track["Total Time"]

            if name in trackNames:
                if duration//1000 == trackNames[name][0]//1000:
                    count = trackNames[name][1]
                    trackNames[name] = (duration, count + 1)
            else:
                trackNames[name] = (duration, 1)
        except:
            pass

        duplicates = []

        for k,v in trackNames.items():
            if v[1] > 1:
                duplicates.append((v[1], k))

        if len(duplicates) > 0:
            print "Found {} duplicates. Track Names saved to duplicate.txt".format(len(duplicates))
        else:
            print "No duplicate tracks found"


        file = open("duplicate.txt", 'w'):
            for dup in duplicates:
                file.write({})




findDuplicates(filaname)

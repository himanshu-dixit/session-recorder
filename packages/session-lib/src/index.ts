
import * as rrweb from 'rrweb'
import { nanoid } from 'nanoid'

class SessionSuggester {
  static recordingID:any = null
  static events:any = []
  static apiHost:string = ''

  static startRecording(apiHost:string){
    this.recordingID = nanoid();
    SessionSuggester.apiHost = apiHost;

    console.log('started recording',{
      recordingID: SessionSuggester.recordingID
    });

    rrweb.record({
      emit:  SessionSuggester.handleEvent,
    });

    setInterval(() => {
      console.log('saving events')
      SessionSuggester.saveEventINBE(SessionSuggester.events)
      SessionSuggester.events = []
    }, 5000)
  }

  static handleEvent(event:any){
    SessionSuggester.events.push(event)
  }

  static saveEventINBE(events:any[]){

    fetch('http://localhost:3000/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recordingID: SessionSuggester.recordingID,
        events
      })
    })

  }

  static stopRecording(){
   console.log('stop recording')
  }
}

export default SessionSuggester;

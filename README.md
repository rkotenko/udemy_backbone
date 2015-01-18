# udemy_backbone
https://www.udemy.com/backbonejs-tutorial/ This is a course through udemy.com to learn the pieces of Backbone.  I am finding it very helpful as it does a good job of breaking the parts down and explaining how things work.  

I have been modifying it a bit here and there though. In my exploration of Backbone while working through, I have found what I think are better ways to do some things. For instance:

eventLesson branch: 
  
  The event section passes an event bus object around to each model or view that needs it.  I think this is unnessary.  An event bus is likely used system-wide and should be declared to be a top-level object such that every object that wants to use it can easily call it.  For the Events section of the course, this means the event bus object is declared globally.  Of course, in a real application, the entire app would be encapsulated in a namespace and this bus would be declared at that namespace's top level

  In the same event section, for the project, it instructs students to have the collection view listen for when a user adds a new vehicle.  I think though, that it is better to have the collection itself listen for this event.  After all, the model will be added to it so it makes sense for it care when a new vehicle is added.  Adding then fires an add event, which the collection view can listen to and render the affected model.  This also keeps a separation of concerns: the collection add a model and the view then renders it instead of the view both adding and rendering.

I also am using listenTo in a lot more places than .on since listenTo ensures that events are detached when views are removed.

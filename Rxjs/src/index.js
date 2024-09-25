import { Observable, Subscriber } from "rxjs";

const observableAlfa$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(20);

  subscriber.complete();
});

const observador = {
  next: (value) => console.log(value),
  complete: () => {
    console.log("Observable completado");
  },
  error: (error) => {
    console.warn("Error recibido");
    console.error(error);
  },
};

observableAlfa$.subscribe(observador);

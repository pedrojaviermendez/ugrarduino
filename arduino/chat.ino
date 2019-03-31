int Boton = 8;
int Led = 3;

void setup() {
  //velocidad a la que se realiza la transmision
  Serial.begin(9600);
  //boton modo entrada
  pinMode(Boton, INPUT_PULLUP);
  //led modo salida
  pinMode(Led, OUTPUT);
}

void loop() {
  //si se presiona el boton, mandar la señal por serial
  if (digitalRead(Boton) == 0) {
    Serial.println("PULSADO BOTÓN");
    delay(500);
  }
  //leemos si hay información en el puerto serial
  if (Serial.available()) {
    char Letra = Serial.read();
    //si la letra es H encendemos
    if (Letra == 'H') {
      digitalWrite(Led, HIGH);
    }
    else if (Letra == 'L') {
      //si es l apagamos
      digitalWrite(Led, LOW);
    }
  }

}

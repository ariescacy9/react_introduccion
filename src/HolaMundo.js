import './HolaMundo.css';


export default function HolaMundo() {
  return (
    <div>
      <h1> Hola Mundo</h1>
      <div class="container">
      <div class="card">
        <div class="card__about">
          <h3>Acerca de Mi</h3>
          <p class="card__about-descripcion">
            soy de Ayacucho - Peru y mis hobbies son los siguientes:
          </p>
          <lu class="card__about-hobbies">
            <li>Series</li>
            <li>Caminata</li>
            <li>Programación</li>
            <li>video juegos</li>
          </lu>
        </div>
      </div>
    </div>
    </div>
  );
}
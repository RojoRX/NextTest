
import { Container } from 'react-bootstrap'
import Header from './layer/layer'
import DataInput from './test_controller/test_data'
import Footer from './footer/footer'
export default function Home() {
  return (
    <>
    <Header></Header>
    <br/>
    <br/>
    <h1 className='text-center h2'>
      Descubra si su seguridad ha sido comprometida y está <br/> en la base de datos vulnerados
    </h1>
    <br/>  
    <br/>
    <br/>
    <DataInput></DataInput>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container>
      <div className="my-4">
        <h2 className="text-center text-purple">Sobre Enlaces Sospechosos</h2>
        <hr className="my-4" />
      </div>

      <p className="border border-purple rounded text-center p-3">
      Si has accedido a un enlace sospechoso en Facebook, podrías 
      estar permitiendo que un software malicioso, también conocido como malware, 
      tome control de tu cuenta. Una vez que el malware tiene acceso a tu cuenta, 
      puede enviar el mismo mensaje a todos tus contactos sin que te des cuenta. 
      A menudo, estos mensajes contienen más enlaces sospechosos, que cuando se hacen clic, 
      pueden dirigir a tus amigos y familiares a sitios web peligrosos o intentar robar 
      información personal. Por lo tanto, es importante estar atento y no hacer clic en enlaces 
      sospechosos, especialmente aquellos enviados por personas desconocidas o que parecen 
      sospechosos..
      </p>
    </Container>
    <br/>
    <Container>
      <div className="my-4">
        <h2 className="text-center text-purple">Como proteger tu seguridad</h2>
        <hr className="my-4" />
      </div>

      <p className="border border-purple rounded text-center p-3">
        
      Para protegerte, asegúrate de elegir una combinación segura de letras, números y símbolos. Además,
        evita utilizar información personal como nombres, fechas de nacimiento o datos de contacto en tu contraseña.
        También es importante que utilices una contraseña diferente para cada cuenta y que la cambies regularmente.
        Recuerda que una contraseña segura es la primera línea de defensa contra los intentos de piratería y robo de
        identidad.
      </p>
    </Container>
    <Footer></Footer>
    </>
  )
}

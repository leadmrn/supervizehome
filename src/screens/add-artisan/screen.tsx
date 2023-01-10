import TextInput from '../../components/text-input';

function AddArtisan() {
  return (
    <div className="AddArtisan page">
      <h1 className="center">Renseignez les informations de l’artisan</h1>
      <form className="form">
        <TextInput type="text" placeholder="Prénom" />
        <TextInput type="text" placeholder="Nom" />
        <TextInput type="text" placeholder="Profession" />
        <TextInput type="email" placeholder="Email" />
        <TextInput type="tel" placeholder="N° de Téléphone" />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
}

export default AddArtisan;

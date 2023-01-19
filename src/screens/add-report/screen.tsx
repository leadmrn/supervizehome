import Back from '../../components/back/component';
import TextInput from '../../components/text-input';

function AddReport() {
  return (
    <div className="AddReport page">
      <Back />
      <h1 className="center">Mon rapport</h1>
      {/* <form className="form">
        <TextInput type="text" placeholder="Titre" />
        <div className="form_div2col">
          <TextInput type="date" placeholder="Date de début" />
          <TextInput type="date" placeholder="Date de fin" />
        </div>
        <TextInput type="text" placeholder="Phase de construction" />
        <TextInput
          type="textarea"
          placeholder="Décriver les travaux de manière exhaustive"
        />
        <input type="submit" value="Envoyer" />
      </form> */}
    </div>
  );
}

export default AddReport;

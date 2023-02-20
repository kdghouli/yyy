<template >
    <form @submit.prevent="ajouterComment()">
        <fieldset >
          <legend>Commentaire</legend>
          <div class="mb-2 ">
            <label for="disabledTextInput" class="form-label" >Ajouter un commentaire</label>
            <textarea  class="form-control" id="disabledTextInput" placeholder="Ajouter un commentaire ..." v-model="comment"></textarea>
          </div>
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">Etat</label>
            <select  class="form-select" id="disabldedSelect" v-model="statusId" placeholder="Etat">
              <option value="1" >En Panne</option>
              <option value="2" >En reparation</option>


            </select>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" v-model="active">
              <label class="form-check-label" for="disabledFieldsetCheck" >
               {{ active?'mazyane':'walo' }} 
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </fieldset>
      </form>
{{ vhl.id}}
    
</template>
<script>
import moment from 'moment';
export default {
  props:['vhl'],
  emits: ['closing'],
data(){




    return{
            
                camionId: this.vhl.id,
                comment: "",
                statusId:"",
                time: moment({}),
                active: true,
            
    }
},
methods: {
ajouterComment() {
  console.log("KK");
    
      let comment = {
        camionId: this.camionId,
        comment: this.comment,
        statusId:this.statusId,
        time: moment().format("[Today is] dddd"),
        active: this.active
        };
        
            fetch('http://localhost:3000/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(comment)
            })
            .then(this.comment="",this.fermeture()              
            )
            .catch(err => console.log(err.message))

            console.log('ok')

},
fermeture(){

  this.$emit('closing')

}




    
}}
</script>

<template>
  <div>
    <div>
    <h3 align = "center"> Past Matches</h3>
    <b-table :items="items_past" :fields="fields_past" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-table :items="row.item.events" :fields="fields_events" striped responsive="sm">
            <b-button size="sm" @click="row.toggleDetails">Hide Events</b-button>
          </b-table>
        </b-card>
      </template>
    </b-table>
   </div>






   <div>
    <h3 align = "center"> Future Matches</h3>
    <b-table :items="items_future" :fields="fields_future" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>


    </b-table>
   </div>

  </div>
</template>

<script>

  export default {
      data() {
        return {
          fields_past: ['match_id', 'local_team', 'visitor_team', 'date_game', 'hour', 'venue', 'result', 'show_details'],
          fields_future: ['match_id', 'local_team', 'visitor_team', 'date_game', 'hour', 'venue'],
          fields_events: ['minute_event', 'description_event','hour'],
          items_past :[],
          items_future:[]
        }
      },
      methods: {
        async GetWeeklyMatches() {
          try {
            // console.log("here");
            const response = await this.axios.get("http://localhost:3000/weekly_matches/", );
            // console.log("finish week");
            // console.log(response.data[0][0].events);
            this.items_past =[];
            this.items_future =[];

            this.items_past = response.data[0];
            this.items_past._showDetails = true;
            this.items_future = response.data[1];

            // console.log("weekly");
            // console.log(response);
          } catch (err) {
            console.log(err.response);
            // this.form.submitError = response.data;
            alert("Incorrect details !");
          }
        // console.log(this.$cookies.get("session"));
        },
      },
      mounted(){
        // console.log("weekly matches");
        this.GetWeeklyMatches(); 
      }
  }
    
</script>



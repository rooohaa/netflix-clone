<template>
   <ul class="accordion">
      <AccordionItem 
         v-for="accordion in accordions"
         :key="accordion.question"
         :question="accordion.question"
         :answer="accordion.answer">
      </AccordionItem>
   </ul>
</template>

<script>
import AccordionItem from './AccordionItem'

export default {
   components: { AccordionItem },
   data() {
      return {
         accordions: [
            { 
               question: 'What is Netflix?', 
               answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.' 
            },
            {
               question: 'How much does Netflix cost?',
               answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.',
               
            },
            {
               question: 'How do i cancel?',
               answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
            },
            {
               question: 'What can i watch on Netflix?',
               answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
            },
            {
               question: 'Where can i watch?',
               answer: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            }    
         ]
      };
   }
}
</script>

<style scoped lang="scss">
.accordion {
   max-width: 800px;
   margin: 0 auto;
   margin-top: 70px;
   margin-bottom: 70px;
   min-height: 400px;
}
</style>
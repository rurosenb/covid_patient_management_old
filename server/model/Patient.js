const mongoose=require('mongoose');

const patientSchema=new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        patientTZ:{
            type: String,
            required: true
        },
        street:{
            type: String,
            required: true
        },
        houseNumber:{
            type: String,
            required: true
        },
        apartmentNumber:{
            type: String,
            required: false
        },
        city:{
            type: String,
            required: true
        },
        zip:{
            type: String,
            required: false
        },
        DOB:{
            type: Date,
            required: true
        },
        phone:{
            type: String,
            required: false
        },
        mobilePhone:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            enum: ["male", "female", "other"],
            default: 'male'
        },
        firstVaccination:{
            required: false,
           date: {
            type: Date,
            required: false
           },
           manufacturer:{
            type: String,
            enum: ['Pfizer', 'moderna', 'jj'],
            default: 'Pfizer'
           }
        },
        secondVaccination:{
            required: false,
            date: {
             type: Date,
             required: false
            },
            manufacturer:{
             type: String,
             enum: ['Pfizer', 'moderna', 'jj'],
             default: 'Pfizer'
            }
         },
         thirdVaccination:{
            required: false,
            date: {
             type: Date,
             required: false
            },
            manufacturer:{
             type: String,
             enum: ['Pfizer', 'moderna', 'jj'],
             default: 'Pfizer'
            }
         },
         fourthVaccination:{
            required: false,
            date: {
             type: Date,
             required: false
            },
            manufacturer:{
             type: String,
             enum: ['Pfizer', 'moderna', 'jj'],
             default: 'Pfizer'
            }
         },
        infectionDate:{
            type: Date,
            required:false
         },
         recoveryDate:{
            type: Date,
            required:false
         }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Patient", patientSchema);


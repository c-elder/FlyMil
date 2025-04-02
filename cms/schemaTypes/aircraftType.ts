import {defineField, defineType} from 'sanity'

export const aircraftType = defineType({
  name: 'aircraft',
  title: 'Aircraft',
  type: 'document',
  fields: [
    defineField({
      name: 'aircraft',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'code',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
            "FIXED-WING", "ROTARY-WING", "TILTROTOR", "UNKNOWN"
        ]
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'manufacturer',
      type: 'string',
      options: {
        list: [
            "N/A", "EUROFIGHTER", "GULFSTREAM AEROSPACE", "BEECHCRAFT", "BOEING", "EMBRAER", "PILATUS", "AIRBUS", "AGUSTA WESTLAND", "MCDONNELL DOUGLAS", "GROB", "BOEING-VERTOL", "CASA", "BOMBARDIER", "LOCKHEED", "ILYUSHIN", "GULFSTREAM", "TOWER", "AGUSTA", "ATR", "ANTONOV", "DASSAULT", "DE HAVILLAND", "EUROCOPTER", "SIKORSKY", "CESSNA", "DORNIER", "RAYTHEON", "BRITISH AEROSPACE", "ALENIA", "LOCKHEED MARTIN", "BEECH", "NORTHROP", "AIRBUS HELICOPTERS", "BELL-BOEING", "LEARJET", "MUDRY", "SOCATA", "BELL", "BAYKAR", "FAIRCHILD", "CIRRUS", "NORTHROP GRUMMAN", "PZL-MIELEC", "PZL-SWIDNIK", "MIL", "LET", "HAWKER BEECHCRAFT", "AEROSPATIALE", "TUPOLEV", "AERMACCHI", "KAWASAKI", "BREGUET", "SAAB", "FOKKER", "ENSTROM", "PIAGGIO", "IAI", "MCDONNELL-DOUGLAS", "GRUMMAN", "PIPER"
        ]
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'image',
    }),
  ],
})


/* global mw */
mw.Title.newFromHref = (href) => {
  let uri

  // Skip every URI that mw.Uri cannot parse.
  try {
    uri = new mw.Uri(href)
  } catch (e) {
    return undefined
  }

  // Skip external URIs.
  if (uri.host !== window.location.hostname) {
    return undefined
  }

  // Pretty URI?
  const queryLength = Object.keys(uri.query).length

  if (queryLength === 0) {
    const regex = new RegExp(mw.RegExp.escape(mw.config.get('wgArticlePath'))
      .replace('\\$1', '(.+)'))

    const matches = regex.exec(uri.path)

    if (!matches) {
      return undefined
    }

    return mw.Title.newFromText(matches[1])

  // Ugly URI that only has a `title` parameter
  } else if (queryLength === 1 && uri.query.title) {
    return uri.query.title
  }

  return undefined
}

let DATA = {"0:Barack Obama":{"length":280,"links":{"0:Bahasa_Indonesia":0.03571428571428571,"0:Bundesstaat_der_Vereinigten_Staaten":0.03571428571428571,"0:Columbia_University":0.17857142857142855,"0:Ethnie":0.03571428571428571,"0:Harvard_Law_School":0.25,"0:Pete_Souza":0.10714285714285714,"0:Politikwissenschaft":0.10714285714285714,"0:Präsidentschaftswahl_in_den_Vereinigten_Staaten_2016":0.03571428571428571,"0:Senat_der_Vereinigten_Staaten":0.03571428571428571,"0:University_of_Hawaii_at_Manoa":0.07142857142857142,"0:Verfassung_der_Vereinigten_Staaten":0.03571428571428571,"0:2009_Nobel_Peace_Prize":0.25,"0:2011_military_intervention_in_Libya":0.17857142857142855,"0:2012_Democratic_National_Convention":0.03571428571428571,"0:Al_From":0.03571428571428571,"0:American_Taxpayer_Relief_Act_of_2012":0.17857142857142855,"0:Barack_(disambiguation)":0.14285714285714285,"0:Barack_Obama_Presidential_Center":0.21428571428571427,"0:Barack_Obama_Sr.":0.3928571428571429,"0:Business_International_Corporation":0.07142857142857142,"0:Calvert_School":0.14285714285714285,"0:City_College_of_New_York":0.03571428571428571,"0:Civil_rights_movement":0.03571428571428571,"0:Climate_change":0.07142857142857142,"0:Constitutional_law":0.17857142857142855,"0:Death_of_Osama_bin_Laden":0.3214285714285714,"0:Democratic_Party_presidential_primaries,_2008":0.42857142857142855,"0:East–West_Center":0.17857142857142855,"0:Emmanuel_Macron":0.03571428571428571,"0:Foreign_student":0.03571428571428571,"0:Gerry_Connolly":0.03571428571428571,"0:Great_Recession":0.3214285714285714,"0:Gun_politics_in_the_United_States":0.03571428571428571,"0:Harvard_University":0.10714285714285714,"0:Hate_crime_laws_in_the_United_States":0.03571428571428571,"0:Health_Care_and_Education_Reconciliation_Act":0.10714285714285714,"0:Health_care_reform_in_the_United_States":0.07142857142857142,"0:Hillary_Clinton":0.03571428571428571,"0:Hiroshima_Peace_Memorial_Museum":0.03571428571428571,"0:Hyde_Park,_Chicago":0.07142857142857142,"0:Illinois":0.21428571428571427,"0:Illinois_Senate":0.21428571428571427,"0:Inauguration_of_Donald_Trump":0.03571428571428571,"0:Indonesian_Language":0.07142857142857142,"0:Jack_Ryan_(politician)":0.03571428571428571,"0:Jared_Polis":0.03571428571428571,"0:Jeremiah_Wright_controversy":0.07142857142857142,"0:LGBT_rights":0.07142857142857142,"0:Lincoln's_House_Divided_Speech":0.07142857142857142,"0:List_of_Barack_Obama_presidential_campaign_endorsements,_2012":0.14285714285714285,"0:List_of_federal_political_scandals_in_the_United_States":0.07142857142857142,"0:List_of_things_named_after_Barack_Obama":0.03571428571428571,"0:Lolo_Soetoro":0.10714285714285714,"0:Luo_people_of_Kenya_and_Tanzania":0.03571428571428571,"0:Matthew_Shepard_and_James_Byrd_Jr._Hate_Crimes_Prevention_Act":0.17857142857142855,"0:Maya_Soetoro-Ng":0.03571428571428571,"0:Menteng":0.03571428571428571,"0:Michael_Eric_Dyson":0.03571428571428571,"0:Michelle_Obama":0.03571428571428571,"0:National_Broadband_Plan_(United_States)":0.03571428571428571,"0:National_Defense_Authorization_Act_for_Fiscal_Year_2010":0.10714285714285714,"0:National_Football_League":0.03571428571428571,"0:New_York_City":0.10714285714285714,"0:Obergefell_v._Hodges":0.07142857142857142,"0:Pope_Francis":0.03571428571428571,"0:Portuguese_Water_Dog":0.03571428571428571,"0:Presidential_library":0.03571428571428571,"0:Profile_in_Courage_Award":0.03571428571428571,"0:Punahou_School":0.07142857142857142,"0:Roseland,_Chicago":0.03571428571428571,"0:Russian_interference_in_the_2016_United_States_elections":0.14285714285714285,"0:Sheila_Miyoshi_Jager":0.07142857142857142,"0:Sidley_Austin":0.03571428571428571,"0:Social_policy_of_Barack_Obama":0.03571428571428571,"0:Stanley_Armour_Dunham":0.03571428571428571,"0:Steeler_Nation":0.03571428571428571,"0:Supreme_Court_of_the_United_States":0.07142857142857142,"0:Syria":0.03571428571428571,"0:The_Audacity_of_Hope":0.03571428571428571,"0:U.S._Bureau_of_Labor_Statistics":0.07142857142857142,"0:U.S._Government_Assessment_of_the_Syrian_Government's_Use_of_Chemical_Weapons_on_August_21,_2013":0.03571428571428571,"0:Unemployment_rate":0.03571428571428571,"0:United_States_Senate_career_of_Barack_Obama":0.07142857142857142,"0:United_States_Senate_election_in_Illinois,_2004":0.3928571428571429,"0:United_States_debt_ceiling":0.10714285714285714,"0:United_States_presidential_election,_2008":0.17857142857142855,"0:United_States–Cuban_Thaw":0.17857142857142855,"0:Wailuku,_Hawaii":0.07142857142857142,"0:Welsh_people":0.03571428571428571,"0:Woods_Fund_of_Chicago":0.10714285714285714,"0:Zionism":0.03571428571428571,"0:Afroamerikaner":0.03571428571428571,"0:Anthropologie":0.10714285714285714,"0:Auma_Obama":0.07142857142857142,"0:Donald_Trump":0.17857142857142855,"0:Indonesien":0.25,"0:Jakarta":0.03571428571428571,"0:Kansas":0.21428571428571427,"0:Luo_(Ethnie)":0.03571428571428571,"0:Obama_(Begriffsklärung)":0.03571428571428571,"0:2004_Democratic_National_Convention":0.21428571428571427,"0:2008_Democratic_National_Convention":0.03571428571428571,"0:2009_Major_League_Baseball_All-Star_Game":0.07142857142857142,"0:2017_Congressional_baseball_shooting":0.10714285714285714,"0:African_Americans":0.2857142857142857,"0:Alice_Palmer_(politician)":0.07142857142857142,"0:American-led_intervention_in_Iraq_(2014–present)":0.17857142857142855,"0:Anthropology":0.03571428571428571,"0:Assassination_threats_against_Barack_Obama":0.03571428571428571,"0:Barack_Obama_election_victory_speech,_2008":0.03571428571428571,"0:Besuki_Public_School":0.03571428571428571,"0:Bill_Clinton":0.14285714285714285,"0:Black_people":0.07142857142857142,"0:Catholic_School":0.07142857142857142,"0:Chicago_Annenberg_Challenge":0.07142857142857142,"0:Christianity_Today":0.03571428571428571,"0:Columbia_College,_Columbia_University":0.03571428571428571,"0:Contiguous_United_States":0.03571428571428571,"0:DREAM_Act":0.03571428571428571,"0:Deferred_Action_for_Childhood_Arrivals":0.03571428571428571,"0:Delegate":0.03571428571428571,"0:Disinvestment_from_Iran":0.03571428571428571,"0:Don't_Ask,_Don't_Tell_Repeal_Act_of_2010":0.3214285714285714,"0:Early_life_and_career_of_Barack_Obama":0.10714285714285714,"0:Evan_Bayh":0.03571428571428571,"0:Family_of_Barack_Obama":0.10714285714285714,"0:First_inauguration_of_Barack_Obama":0.17857142857142855,"0:Foreign_involvement_in_the_Syrian_Civil_War":0.03571428571428571,"0:George_W._Bush":0.3571428571428571,"0:Golden_Rule":0.03571428571428571,"0:Graduate_student":0.10714285714285714,"0:Harvard_Law_Review":0.10714285714285714,"0:Hawaii":0.03571428571428571,"0:Health_care_in_the_United_States":0.17857142857142855,"0:Hurricane_Irma":0.03571428571428571,"0:Illinois_Senate_career_of_Barack_Obama":0.3214285714285714,"0:Illinois_State_Senate":0.2857142857142857,"0:Immigration_Reform_and_Control_Act_of_1986":0.03571428571428571,"0:Indonesia":0.3214285714285714,"0:Jeremiah_Wright":0.03571428571428571,"0:Jimmy_Carter":0.03571428571428571,"0:Joe_Biden":0.10714285714285714,"0:John_McCain":0.14285714285714285,"0:Joint_Comprehensive_Plan_of_Action":0.17857142857142855,"0:Joint_Political_Military_Group":0.14285714285714285,"0:Jonathan_Toews":0.03571428571428571,"0:Juris_Doctor":0.03571428571428571,"0:Kapiolani_Medical_Center_for_Women_and_Children":0.14285714285714285,"0:Lawton_Chiles":0.03571428571428571,"0:Libya":0.03571428571428571,"0:Lilly_Ledbetter_Fair_Pay_Act_of_2009":0.03571428571428571,"0:List_of_African-American_United_States_Senators":0.07142857142857142,"0:List_of_people_pardoned_by_Barack_Obama":0.07142857142857142,"0:Margaret_Thatcher":0.03571428571428571,"0:Middle_Class_Tax_Relief_and_Job_Creation_Act_of_2012":0.07142857142857142,"0:Mitt_Romney":0.10714285714285714,"0:Molokai":0.07142857142857142,"0:Muammar_Gaddafi":0.07142857142857142,"0:National_Association_for_Business_Economics":0.03571428571428571,"0:Nyang'oma_Kogelo":0.03571428571428571,"0:Occidental_College":0.07142857142857142,"0:One_America_Appeal":0.03571428571428571,"0:Paris_Agreement":0.03571428571428571,"0:Patient_Protection_and_Affordable_Care_Act":0.75,"0:Paul_Tsongas":0.07142857142857142,"0:President_of_the_Palestinian_National_Authority":0.03571428571428571,"0:Prince_Harry":0.07142857142857142,"0:Republican_Party_(United_States)":0.10714285714285714,"0:Resurrection_of_Jesus":0.07142857142857142,"0:Rick_Larsen":0.03571428571428571,"0:Russian_language":0.14285714285714285,"0:Russian_military_intervention_in_Ukraine_(2014–present)":0.03571428571428571,"0:St._Francis_of_Assisi":0.03571428571428571,"0:Super_Bowl_XLIII":0.07142857142857142,"0:Tax_credit":0.03571428571428571,"0:Ted_Kennedy":0.07142857142857142,"0:Tom_Carper":0.03571428571428571,"0:United_States_Senate":0.42857142857142855,"0:Washington_(state)":0.17857142857142855,"0:1961":0.03571428571428571,"0:Kapuziner":0.07142857142857142,"0:Kenia":0.03571428571428571,"0:Nyang’oma_Kogelo":0.17857142857142855,"0:Präsidentschaftswahl_in_den_Vereinigten_Staaten_2012":0.03571428571428571,"0:Senat_von_Illinois":0.03571428571428571,"0:Vereinigte_Staaten":0.03571428571428571,"0:Wichita_(Kansas)":0.10714285714285714,"0:Xi_Jinping":0.03571428571428571,"0:2004_Democratic_National_Convention_keynote_address":0.14285714285714285,"0:Allyson_Schwartz":0.10714285714285714,"0:American_Civil_War":0.03571428571428571,"0:American_Recovery_and_Reinvestment_Act_of_2009":0.3928571428571429,"0:Angela_Merkel":0.03571428571428571,"0:Ann_Dunham":0.3214285714285714,"0:Apartheid":0.03571428571428571,"0:Arab_League":0.07142857142857142,"0:Bachelor_of_Arts":0.03571428571428571,"0:Barack_Obama_presidential_campaign,_2008":0.25,"0:Barack_Obama_presidential_primary_campaign,_2008":0.03571428571428571,"0:Bernie_Sanders":0.03571428571428571,"0:Black_church":0.03571428571428571,"0:Bo_(dog)":0.03571428571428571,"0:Budget_Control_Act_of_2011":0.07142857142857142,"0:Cal_Dooley":0.03571428571428571,"0:Central_Jakarta":0.14285714285714285,"0:Chicago_Bears":0.07142857142857142,"0:Civil_and_political_rights":0.07142857142857142,"0:Class_Action_Fairness_Act_of_2005":0.03571428571428571,"0:Community_organizing":0.17857142857142855,"0:Crain's_Chicago_Business":0.03571428571428571,"0:Deceptive_Practices_and_Voter_Intimidation_Prevention_Act":0.03571428571428571,"0:Democratic_National_Committee_chairmanship_election,_2017":0.03571428571428571,"0:Depression_(economics)":0.03571428571428571,"0:Destruction_of_Syria's_chemical_weapons":0.03571428571428571,"0:Disinvestment_from_South_Africa":0.07142857142857142,"0:Dodd–Frank_Wall_Street_Reform_and_Consumer_Protection_Act":0.7142857142857142,"0:Dreams_from_My_Father":0.03571428571428571,"0:Electoral_College_(United_States)":0.07142857142857142,"0:Financial_regulation":0.10714285714285714,"0:First_100_days_of_Barack_Obama's_presidency":0.07142857142857142,"0:George_H._W._Bush":0.07142857142857142,"0:Green_Room_(White_House)":0.07142857142857142,"0:Harold_Ford_Jr.":0.03571428571428571,"0:Honolulu":0.3214285714285714,"0:International_sanctions_during_the_Ukrainian_crisis":0.17857142857142855,"0:Invesco_Field_at_Mile_High":0.03571428571428571,"0:Iraq_War_De-Escalation_Act_of_2007":0.03571428571428571,"0:Iron_Dome":0.03571428571428571,"0:J-1_visa":0.03571428571428571,"0:John_F._Kennedy_Presidential_Library_and_Museum":0.14285714285714285,"0:Kalorama,_Washington,_D.C.":0.03571428571428571,"0:Kenwood,_Chicago":0.03571428571428571,"0:Kwame_Raoul":0.03571428571428571,"0:Lesbian,_gay_and_bisexual":0.03571428571428571,"0:List_of_Barack_Obama_presidential_campaign_endorsements,_2008":0.10714285714285714,"0:List_of_Presidents_of_the_United_States":0.21428571428571427,"0:List_of_international_presidential_trips_made_by_Barack_Obama":0.03571428571428571,"0:Madelyn_Dunham":0.03571428571428571,"0:Native_Indonesian":0.07142857142857142,"0:New_START":0.07142857142857142,"0:New_York_Public_Interest_Research_Group":0.14285714285714285,"0:Obama_(disambiguation)":0.17857142857142855,"0:Obama_administration":0.03571428571428571,"0:Of_Thee_I_Sing_(book)":0.07142857142857142,"0:Office_of_Energy_Efficiency_and_Renewable_Energy":0.03571428571428571,"0:Payday_loan":0.03571428571428571,"0:President_of_the_Confederate_States_of_America":0.10714285714285714,"0:President_of_the_United_States":0.03571428571428571,"0:Redeemer_(Christianity)":0.03571428571428571,"0:Same-sex_marriage_in_the_United_States":0.25,"0:Sandy_Hook_Elementary_School_shooting":0.14285714285714285,"0:Sarah_Palin":0.03571428571428571,"0:Second_inauguration_of_Barack_Obama":0.17857142857142855,"0:South_Jakarta":0.10714285714285714,"0:State_Children's_Health_Insurance_Program":0.03571428571428571,"0:Stimulus_(economics)":0.03571428571428571,"0:Sunny_(dog)":0.03571428571428571,"0:Super_Bowl_XX":0.03571428571428571,"0:Tax_Relief,_Unemployment_Insurance_Reauthorization,_and_Job_Creation_Act_of_2010":0.6785714285714286,"0:Tim_Roemer":0.03571428571428571,"0:United_States_Bureau_of_Justice_Statistics":0.25,"0:United_States_House_of_Representatives":0.07142857142857142,"0:United_States_Senate_Committee_on_Environment_and_Public_Works":0.03571428571428571,"0:United_States_v._Windsor":0.07142857142857142,"0:University_of_Chicago_Law_School":0.3571428571428571,"0:University_of_Hawaii":0.07142857142857142,"0:University_of_Washington":0.10714285714285714,"0:Vice_President_of_the_United_States":0.14285714285714285,"0:Vladimir_Putin":0.07142857142857142,"0:War_in_Afghanistan_(2001–14)":0.10714285714285714,"0:Wichita,_Kansas":0.10714285714285714,"0:Withdrawal_of_U.S._troops_from_Afghanistan":0.14285714285714285,"0:Withdrawal_of_U.S._troops_from_Iraq":0.10714285714285714}}}
DATA = DATA['0:Barack Obama']

;(function () {
  // Stolen (not stolen) from
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects.
  function addClientRectsOverlay (parent, elt, opacity) {
    // Absolutely position a div over each client rect so that its border width
    // is the same as the rectangle's width.
    // Note: the overlays will be out of place if the user resizes or zooms.
    var rects = elt.getClientRects()
    for (var i = 0; i !== rects.length; i++) {
      var rect = rects[i]
      var tableRectDiv = document.createElement('div')
      tableRectDiv.style.position = 'absolute'
      tableRectDiv.style.backgroundColor = 'red'
      tableRectDiv.style.opacity = opacity
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
      tableRectDiv.style.margin = tableRectDiv.style.padding = 0
      tableRectDiv.style.top = px(rect.top + scrollTop)
      tableRectDiv.style.left = px(rect.left + scrollLeft)
      tableRectDiv.style.width = px(rect.width)
      tableRectDiv.style.height = px(rect.height)

      parent.appendChild(tableRectDiv)
    }
  }

  // BEGIN VIZZZ
  const px = (n) => `${n}px`

  let overlay = document.querySelector('#overlay')

  if (overlay) {
    overlay.innerHTML = ''
  } else {
    overlay = document.createElement('div')
    overlay.id = 'overlay'
  }

  overlay.style.position = 'absolute'
  overlay.style.top = overlay.style.left = 0
  overlay.style.width = px(document.body.offsetWidth)
  overlay.style.height = px(document.body.offsetHeight)

  document.querySelectorAll('#mw-content-text a')
    .forEach(node => {
      // WTF?
      if (!node.offsetTop || !node.offsetLeft) {
        return
      }

      const title = mw.Title.newFromHref(node.href)

      if (!title) {
        return
      }

      const key = `${title.namespace}:${title.title}`

      if (!DATA.links[key]) {
        return
      }

      addClientRectsOverlay(overlay, node, DATA.links[key])
    })

  document.body.appendChild(overlay)
}())

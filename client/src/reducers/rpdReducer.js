const SET_RPDDIRECTION = 'SET_RPDDIRECTION';
const SET_RPDPROFILE = 'SET_RPDPROFILE';
const SET_RPDYEARS = 'SET_RPDYEARS';
const SET_RPDCURRICULUM = 'SET_RPDCURRICULUM';
const SET_RPDDISCIPLINE = 'SET_RPDDISCIPLINE';
const SET_RPDQUALIFICATION = 'SET_RPDQUALIFICATION';
const SET_RPDORDERNUMBER = 'SET_RPDORDERNUMBER';
const SET_RPDCOMPETENCE = 'SET_RPDCOMPETENCE';
const SET_RPDACTIVE = 'SET_RPDACTIVE';
const SET_RPDDEVELOPERS = 'SET_RPDDEVELOPERS';
const SET_RPDREVIEWER = 'SET_RPDREVIEWER';
const SET_RPDAFFIRMATIVE = 'SET_RPDAFFIRMATIVE';
const SET_RPDGOAL = 'SET_RPDGOAL';
const SET_RPDORDERS = 'SET_RPDORDERS';
const SET_RPDPLANNEDOUTCOMES = 'SET_RPDPLANNEDOUTCOMES';
const SET_RPDSEMESTERS = 'SET_RPDSEMESTERS';
const SET_RPDPLACEDISCIPLINE = 'SET_RPDPLACEDISCIPLINE';
const SET_RPDSCOPEDISCIPLINE = 'SET_RPDSCOPEDISCIPLINE';
const SET_RPDSCOPECONTACTWORK = 'SET_RPDSCOPECONTACTWORK';
const SET_RPDTHEMATICPLAN = 'SET_RPDTHEMATICPLAN';
const SET_RPDTHEMATICPLANTOTAL = 'SET_RPDTHEMATICPLANTOTAL';
const SET_RPDCHAPTERPLAN = 'SET_RPDCHAPTERPLAN';
const SET_RPDCHAPTERCONTENTPLAN = 'SET_RPDCHAPTERCONTENTPLAN';
const SET_RPDPRACTICALTRAINING = 'SET_RPDPRACTICALTRAINING';
const SET_RPDINDEPENDENTWORK = 'SET_RPDINDEPENDENTWORK';
const SET_RPDLABORATORYCLASSES = 'SET_RPDLABORATORYCLASSES';
const SET_RPDREFERENCESMAIN = 'SET_RPDREFERENCESMAIN';
const SET_RPDREFERENCESADDITIONAL = 'SET_RPDREFERENCESADDITIONAL';
const SET_RPDINFORMATION = 'SET_RPDINFORMATION';
const SET_RPDELECTRONICLIBRARIES = 'SET_RPDELECTRONICLIBRARIES';
const SET_RPDCLASSROOM = 'SET_RPDCLASSROOM';
const SET_RPDANOTHERCLASSROOM = 'SET_RPDANOTHERCLASSROOM';
const SET_RPDEQUIPMENT = 'SET_RPDEQUIPMENT';
const SET_RPDTYPEELECTRONICEQUIPMENT = 'SET_RPDTYPEELECTRONICEQUIPMENT';
const SET_RPDELECTRONICEQUIPMENTS = 'SET_RPDELECTRONICEQUIPMENTS';

const defaultState = {
    currentDirection: '',
    currentProfile: '',
    currentYears: '',
    currentCurriculum: '',
    currentDiscipline: '',
    currentQualification: '',
    currentOrderNumber: '',
    currentCompetence: [
        {
            code: '',
            description: '',
        },
    ],
    currentActive: [],
    currentDevelopers: [''],
    currentReviewer: '',
    currentAffirmative: '',
    currentGoal: '',
    currentOrders: [''],
    currentPlannedOutcomes: {
        know: [''],
        be_able: [''],
        own: [''],
        master: [{
            label: '',
            value: '',
        }],
    },
    currentSemesters: [],
    currentPlaceDiscipline: {
        based: [],
        basis: [],
    },
    currentScopeDiscipline: {
        totalCredits: '',
        totalHours: '',
        classroomClasses: '',
        lectures: '',
        laboratory: '',
        practical: '',
        independent: '',
        formCertification: [''],
    },
    currentScopeContactWork: {
        lectures: '',
        laboratory: '',
        consultation: '',
        test: '',
        exam: '',
        course: '',
        all: '',
    },
    currentThematicPlan: [
        {
            name: '',
            total: '0/0',
            lectures: 0,
            laboratory: 0,
            independentWork: 0,
        }
    ],
    currentThematicPlanTotal: {
        total: '0/0',
        lectures: 0,
        laboratory: 0,
        independentWork: 0,
    },
    currentChapterPlan: [
        '',
    ],
    currentChapterContentPlan: [
        {
            chapter: 0,
            name: '',
            description: '',
        }
    ],
    currentPracticalTraining: [
        {
            codeCompetence: '',
            indicatorCompetence: '',
            taskContent: '',
            total: 0,
            lectures: 0,
            courseProject: 0,
            laboratory: 0,
        },
    ],
    currentIndependentWork: [
        {
            section: '',
            task: '',
            hours: 0,
            recommendation: '',
            control: '',
        }
    ],
    currentLaboratoryClasses: [
        '',
    ],
    currentReferencesMain: [
        '',
    ],
    currentReferencesAdditional: [

    ],
    currentInformation: [
        '',
    ],
    currentElectronicLibraries: [
        '',
    ],
    currentClassroom: [
        {
            specialAudit: '',
            numberAudit: '',
        },
    ],
    currentAnotherClassroom: '',
    currentEquipment: '',
    currentTypeElectronicEquipment: '',
    currentElectronicEquipments: [
        '',
    ]
}

export default function rpdReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_RPDDIRECTION:
            return {
                ...state,
                currentDirection: action.payload,
            }
        case SET_RPDPROFILE:
            return {
                ...state,
                currentProfile: action.payload,
            }
        case SET_RPDYEARS:
            return {
                ...state,
                currentYears: action.payload,
            }
        case SET_RPDCURRICULUM:
            return {
                ...state,
                currentCurriculum: action.payload,
            }
        case SET_RPDDISCIPLINE:
            return {
                ...state,
                currentDiscipline: action.payload,
            }
        case SET_RPDQUALIFICATION:
            return {
                ...state,
                currentQualification: action.payload,
            }
        case SET_RPDORDERNUMBER:
            return {
                ...state,
                currentOrderNumber: action.payload,
            }
        case SET_RPDCOMPETENCE:
            return {
                ...state,
                currentCompetence: action.payload,
            }
        case SET_RPDACTIVE:
            return {
                ...state,
                currentActive: action.payload,
            }
        case SET_RPDDEVELOPERS:
            return {
                ...state,
                currentDevelopers: action.payload,
            }
        case SET_RPDREVIEWER:
            return {
                ...state,
                currentReviewer: action.payload,
            }
        case SET_RPDAFFIRMATIVE:
            return {
                ...state,
                currentAffirmative: action.payload,
            }
        case SET_RPDGOAL:
            return {
                ...state,
                currentGoal: action.payload,
            }
        case SET_RPDORDERS:
            return {
                ...state,
                currentOrders: action.payload,
            }
        case SET_RPDPLANNEDOUTCOMES:
            return {
                ...state,
                currentPlannedOutcomes: action.payload,
            }
        case SET_RPDSEMESTERS:
            return {
                ...state,
                currentSemesters: action.payload,
            }
        case SET_RPDPLACEDISCIPLINE:
            return {
                ...state,
                currentPlaceDiscipline: action.payload,
            }
        case SET_RPDSCOPEDISCIPLINE:
            return {
                ...state,
                currentScopeDiscipline: action.payload,
            }
        case SET_RPDSCOPECONTACTWORK:
            return {
                ...state,
                currentScopeContactWork: action.payload,
            }
        case SET_RPDTHEMATICPLAN:
            return {
                ...state,
                currentThematicPlan: action.payload,
            }
        case SET_RPDTHEMATICPLANTOTAL:
            return {
                ...state,
                currentThematicPlanTotal: action.payload,
            }
        case SET_RPDCHAPTERPLAN:
            return {
                ...state,
                currentChapterPlan: action.payload,
            }
        case SET_RPDCHAPTERCONTENTPLAN:
            return {
                ...state,
                currentChapterContentPlan: action.payload,
            }
        case SET_RPDPRACTICALTRAINING:
            return {
                ...state,
                currentPracticalTraining: action.payload,
            }
        case SET_RPDINDEPENDENTWORK:
            return {
                ...state,
                currentIndependentWork: action.payload,
            }
        case SET_RPDLABORATORYCLASSES:
            return {
                ...state,
                currentLaboratoryClasses: action.payload,
            }
        case SET_RPDREFERENCESMAIN:
            return {
                ...state,
                currentReferencesMain: action.payload,
            }
        case SET_RPDREFERENCESADDITIONAL:
            return {
                ...state,
                currentReferencesAdditional: action.payload,
            }
        case SET_RPDINFORMATION:
            return {
                ...state,
                currentInformation: action.payload,
            }
        case SET_RPDELECTRONICLIBRARIES:
            return {
                ...state,
                currentElectronicLibraries: action.payload,
            }
        case SET_RPDCLASSROOM:
            return {
                ...state,
                currentClassroom: action.payload,
            }
        case SET_RPDANOTHERCLASSROOM:
            return {
                ...state,
                currentAnotherClassroom: action.payload,
            }
        case SET_RPDEQUIPMENT:
            return {
                ...state,
                currentEquipment: action.payload,
            }
        case SET_RPDTYPEELECTRONICEQUIPMENT:
            return {
                ...state,
                currentTypeElectronicEquipment: action.payload,
            }
        case SET_RPDELECTRONICEQUIPMENTS:
            return {
                ...state,
                currentElectronicEquipments: action.payload,
            }
        default:
            return state
    }
}

export const setRPDDirection = direction => ({type: SET_RPDDIRECTION, payload: direction});
export const setRPDProfile = profile => ({type: SET_RPDPROFILE, payload: profile});
export const setRPDYears = years => ({type: SET_RPDYEARS, payload: years});
export const setRPDCurriculum = curriculum => ({type: SET_RPDCURRICULUM, payload: curriculum});
export const setRPDDiscipline = discipline => ({type: SET_RPDDISCIPLINE, payload: discipline});
export const setRPDQualification = qualification => ({type: SET_RPDQUALIFICATION, payload: qualification});
export const setRPDOrderNumber = orderNumber => ({type: SET_RPDORDERNUMBER, payload: orderNumber});
export const setRPDCompetence = competence => ({type: SET_RPDCOMPETENCE, payload: competence});
export const setRPDActive = active => ({type: SET_RPDACTIVE, payload: active});
export const setRPDDevelopers = developers => ({type: SET_RPDDEVELOPERS, payload: developers});
export const setRPDReviewer = reviewer => ({type: SET_RPDREVIEWER, payload: reviewer});
export const setRPDAffirmative = affirmative => ({type: SET_RPDAFFIRMATIVE, payload: affirmative});
export const setRPDGoal = goal => ({type: SET_RPDGOAL, payload: goal});
export const setRPDOrders = orders => ({type: SET_RPDORDERS, payload: orders});
export const setRPDPlannedOutcomes = plannedOutcomes => ({type: SET_RPDPLANNEDOUTCOMES, payload: plannedOutcomes});
export const setRPDSemesters = semesters => ({type: SET_RPDSEMESTERS, payload: semesters});
export const setRPDPlaceDiscipline = placeDiscipline => ({type: SET_RPDPLACEDISCIPLINE, payload: placeDiscipline});
export const setRPDScopeContactWork = scopeContactWork => ({type: SET_RPDSCOPECONTACTWORK, payload: scopeContactWork});
export const setRPDScopeDiscipline = scopeDiscipline => ({type: SET_RPDSCOPEDISCIPLINE, payload: scopeDiscipline});
export const setRPDThematicPlan = thematicPlan => ({type: SET_RPDTHEMATICPLAN, payload: thematicPlan});
export const setRPDThematicPlanTotal = thematicPlanTotal => ({type: SET_RPDTHEMATICPLANTOTAL, payload: thematicPlanTotal});
export const setRPDChapterPlan = chapterPlan => ({type: SET_RPDCHAPTERPLAN, payload: chapterPlan});
export const setRPDChapterContentPlan = chapterContentPlan => ({type: SET_RPDCHAPTERCONTENTPLAN, payload: chapterContentPlan});
export const setRPDPracticalTraining = practicalTraining => ({type: SET_RPDPRACTICALTRAINING, payload: practicalTraining});
export const setRPDIndependentWork = independentWork => ({type: SET_RPDINDEPENDENTWORK, payload: independentWork});
export const setRPDLaboratoryClasses = laboratoryClasses => ({type: SET_RPDLABORATORYCLASSES, payload: laboratoryClasses});
export const setRPDReferencesMain = referencesMain => ({type: SET_RPDREFERENCESMAIN, payload: referencesMain});
export const setRPDReferencesAdditional = referencesAdditional => ({type: SET_RPDREFERENCESADDITIONAL, payload: referencesAdditional});
export const setRPDInformation = information => ({type: SET_RPDINFORMATION, payload: information});
export const setRPDElectronicLibraries = electronicLibraries => ({type: SET_RPDELECTRONICLIBRARIES, payload: electronicLibraries});
export const setRPDClassroom = classroom => ({type: SET_RPDCLASSROOM, payload: classroom});
export const setRPDAnotherClassroom = anotherClassroom => ({type: SET_RPDANOTHERCLASSROOM, payload: anotherClassroom});
export const setRPDEquipment = equipment => ({type: SET_RPDEQUIPMENT, payload: equipment});
export const setRPDTypeElectronicEquipment = typeElectronicEquipment => ({type: SET_RPDTYPEELECTRONICEQUIPMENT, payload: typeElectronicEquipment});
export const setRPDElectronicEquipments = electronicEquipments => ({type: SET_RPDELECTRONICEQUIPMENTS, payload: electronicEquipments});


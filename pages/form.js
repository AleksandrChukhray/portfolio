import {useState} from 'react'
import {toast} from 'react-toastify'
import {Field, Form} from 'react-final-form'
import Head from '../components/head'
import InnerLayout from '../components/layouts/inner-page'
import {withTranslation} from '../i18n'
import config from '../lib/config'
import {
    composeValidators,
    isEmail,
    isURL,
    minMaxValue,
    required
} from '../lib/validate'
import {sendMail} from '../requests/email'

function Questionnaire({t}) {
    const [
        currentQuestion,
        showQuestion
    ] = useState(0)
    const isDisplay = (value, index) => ({
        display: value === index
            ? 'block'
            : 'none'
    })

    const onSubmit = async (values, form) => {
        const result = await sendMail(values)

        if (result && result.info) {
            // Показать оповещение
            toast(t('notification-success'), {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })

            // Очистить форму
            setTimeout(form.reset)

            // Показать первый вопрос
            showQuestion(0)
        } else {
            toast(t('notification-error'), {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        }
    }

    function onPrevHandler() {
        showQuestion(currentQuestion - 1)
    }

    function onNextHandler() {
        showQuestion(currentQuestion + 1)
    }

    return (
        <InnerLayout clasName="form-page">
            <Head title="Questionnaire"/>

            <section className="theme-light section section--form">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="transform-text-left page-text">
                                {`${t('question')} ${currentQuestion + 1} ${t('of')} 6`}
                            </div>
                        </div>

                        <div className="col-10 align-self-center">
                            <Form
                                onSubmit={onSubmit}
                                render={({
                                             handleSubmit,
                                             form,
                                             submitting,
                                             pristine,
                                             values,
                                             hasValidationErrors,
                                             ...other
                                         }) => (<form
                                    className="form"
                                    onSubmit={handleSubmit}
                                >
                                    <div
                                        style={isDisplay(0, currentQuestion)}
                                        className="form_question form_question--1 form_question--company"
                                    >
                                        <div className="question">
                                            <div className="question_header">
                                                {t('company-info-title')}
                                            </div>

                                            <div className="question_sub-header">
                                                {t('company-info-sub-title')}
                                            </div>

                                            <div className="question_body">
                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('company-name')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="company_name"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('company-name-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('company-site')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="company_site"
                                                            validate={composeValidators(required, minMaxValue(3)(30), isURL)}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('company-site-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={isDisplay(1, currentQuestion)}
                                        className="form_question form_question--2 form_question--hr"
                                    >
                                        <div className="question">
                                            <div className="question_header">
                                                {t('person-info-title')}
                                            </div>

                                            <div className="question_sub-header">
                                                {t('person-info-sub-title')}
                                            </div>

                                            <div className="question_body">
                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('person-first-name')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="person_first_name"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('person-first-name-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('person-last-name')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="person_last_name"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('person-last-name-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('person-middle-name')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="person_middle_name"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('person-middle-name-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label className="question_label">{t('person-site')}</label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="person_site"
                                                            validate={composeValidators(required, minMaxValue(3)(30), isURL)}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('person-site-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label className="question_label">{t('person-email')}</label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="person_email"
                                                            validate={composeValidators(required, minMaxValue(3)(30), isEmail)}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('person-email-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={isDisplay(2, currentQuestion)}
                                        className="form_question form_question--3 form_question--interview"
                                    >
                                        <div className="question">
                                            <div className="question_header">{t('date-title')}</div>

                                            <div className="question_sub-header">{t('date-sub-title')}</div>

                                            <div className="question_body">
                                                <div className="question_item">
                                                    <label className="question_label">{t('date-date')}</label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="date_date"
                                                            validate={composeValidators(required, minMaxValue(3)(20))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('date-date-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label className="question_label">{t('date-time')}</label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="date_time"
                                                            validate={composeValidators(required, minMaxValue(3)(10))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('date-time-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('date-duration')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="date_duration"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('date-duration-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={isDisplay(3, currentQuestion)}
                                        className="form_question form_question--4 form_question--position"
                                    >
                                        <div className="question">
                                            <div className="question_header">{t('offer-title')}</div>

                                            <div className="question_sub-header">{t('offer-sub-title')}</div>

                                            <div className="question_body">
                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('offer-position')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="offer_position"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('offer-position-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('offer-salary')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="offer_salary"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('offer-salary-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('offer-description')}
                                                    </label>

                                                    <div className="form_input form_input--textarea">
                                                        <Field
                                                            name="offer_description"
                                                            validate={composeValidators(required, minMaxValue(3)(500))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                    <textarea
                                        className="question_textarea input"
                                        cols={30}
                                        {...input}
                                        placeholder={t('offer-description-placeholder')}
                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={isDisplay(4, currentQuestion)}
                                        className="form_question form_question--5 form_question--where-find"
                                    >
                                        <div className="question">
                                            <div className="question_header">{t('source-title')}</div>

                                            <div className="question_sub-header">{t('source-sub-title')}</div>

                                            <div className="question_body">
                                                <div className="question_item">
                                                    <label
                                                        className="question_label"
                                                    >{t('source-source')}
                                                    </label>

                                                    <div className="form_input form_input--input">
                                                        <Field
                                                            name="source_source"
                                                            validate={composeValidators(required, minMaxValue(3)(30))}
                                                        >
                                                            {({input, meta}) =>
                                                                <div>
                                                                    <input
                                                                        className="question_input input"
                                                                        {...input}
                                                                        type="text"
                                                                        placeholder={t('source-source-placeholder')}
                                                                    />

                                                                    {meta.error && meta.touched && <span
                                                                        className="form_required"
                                                                    >{meta.error}
                                                                                                       </span>}
                                                                </div>}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={isDisplay(5, currentQuestion)}
                                        className="form_question form_question--6 form_question--attention"
                                    >
                                        <div className="question">
                                            <div className="question_header">{t('attention-title')}</div>

                                            <div
                                                className="question_sub-header"
                                            >{t('attention-sub-title')}
                                            </div>

                                            <div className="question_body">
                                                <div className="question_item">
                                                    <div className="question_label">
                                                        {'PrivatBank (USD):   '}

                                                        <b>{config.privat_bank_USD}</b>
                                                    </div>

                                                    <br/>

                                                    <div className="question_label">
                                                        {'PrivatBank (UAH):   '}

                                                        <b>{config.privat_bank_UAH}</b>
                                                    </div>

                                                    <br/>

                                                    <div className="question_label">
                                                        {'Payoneer (USD):   '}

                                                        <b>{config.payoneer_USD}</b>
                                                    </div>

                                                    <br/>

                                                    <br/>

                                                    <br/>

                                                    <Field
                                                        type="checkbox" name="sendToBankCard"
                                                        validate={required}
                                                    >
                                                        {({input, meta}) =>
                                                            <div style={{textAlign: 'center'}}>
                                                                <input
                                                                    className="question_input input checkbox"
                                                                    {...input}

                                                                />

                                                                <span>{'   '}</span>

                                                                <b>{t('attention-send-money')}</b>

                                                                {meta.error && meta.touched && <span
                                                                    className="form_required"
                                                                >{meta.error}
                                                                                                   </span>}
                                                            </div>}
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form_buttons">
                                        <button
                                            disabled={currentQuestion === 0} className="button" type="button"
                                            onClick={onPrevHandler}
                                        >{t('prev')}
                                        </button>

                                        <button
                                            className="button" type="submit"
                                            disabled={submitting || pristine || hasValidationErrors}
                                        >
                                            { (submitting) && <i className="fas fa-sync fa-spin" />}
                                            {t('submit')}
                                        </button>

                                        <button
                                            className="button" type="button" onClick={form.reset}
                                            disabled={submitting || pristine}
                                        >
                                            {t('reset')}
                                        </button>

                                        <button
                                            disabled={currentQuestion === 5} className="button" type="button"
                                            onClick={onNextHandler}
                                        >{t('next')}
                                        </button>
                                    </div>
                                </form>)}
                            />
                        </div>

                        <div className="col"/>
                    </div>
                </div>
            </section>
        </InnerLayout>
    )
}

export default withTranslation('form')(Questionnaire)

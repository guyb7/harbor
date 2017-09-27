import { grey300, grey500, white } from '../../../style/colors'

export default {
  container: {
    marginBottom: 40
  },
  newItemFormAssign: {
    width: 120,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.28571429rem',
    boxShadow: '0 0 0 0 transparent inset',
    fontWeight: 'normal',
    padding: '.5em .2em .5em 1em'
  },
  newItemFormAssignOverride: `
    .ui.form .fields>.field.flex-1 {
      flex: 1;
    }
    .ui.inline.dropdown>.text {
      white-space: nowrap;
      overflow: hidden;
      font-weight: normal;
      color: rgba(0,0,0,.87);
    }
  `,
  dueDateOverride: `
    .SingleDatePickerInput {
      font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
      border: 1px solid rgba(34,36,38,.15);
      border-radius: .28571429rem;
      box-shadow: 0 0 0 0 transparent inset;
      background: #fff;
    }
    .DateInput {
      font-size: 1em;
      background: transparent;
      line-height: 1.21428571em;
      padding: 6px 0;
      color: rgba(0,0,0,.25);
    }
    .DateInput__display-text--focused {
      background: transparent;
      color: rgba(0,0,0,.87);
    }
  `
}

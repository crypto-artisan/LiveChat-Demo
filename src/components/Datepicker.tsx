import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";

interface DatepickerInputProps {
  onClick?: () => void;
  value?: string;
  inputClass: string;
  children?: React.ReactNode;
}

/* Datepicker with Input */
const DatepickerInput = forwardRef<HTMLInputElement, DatepickerInputProps>(
  (props, ref) => {
    const onDateValueChange = () => {
      console.log("date value changed");
    };
    return (
      <input
        type="text"
        className={classNames("form-control", props.inputClass)}
        onClick={props.onClick}
        value={props.value}
        onChange={onDateValueChange}
        ref={ref}
      />
    );
  }
);

/* Datepicker with Addon Input */
const DatepickerInputWithAddon = forwardRef<
  HTMLInputElement,
  DatepickerInputProps
>((props, ref) => (
  <div className="input-group input-group-sm" ref={ref}>
    <input
      type="text"
      className={classNames("form-control", props.inputClass)}
      onClick={props.onClick}
      value={props.value}
      readOnly
    />
    <span className="input-group-text bg-blue border-blue text-white">
      <i className="mdi mdi-calendar-range"></i>
    </span>
  </div>
));

interface HyperDatepickerProps {
  value: Date;
  onChange: (date: any) => void;
  hideAddon?: boolean;
  inputClass?: string;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  showTimeSelect?: boolean;
  tI?: number;
  timeCaption?: string;
  timeFormat?: string;
  showTimeSelectOnly?: boolean;
  monthsShown?: number;
  inline?: boolean;
}

const HyperDatepicker = (props: HyperDatepickerProps) => {
  // handle custom input
  // ;
  const input =
    (props.hideAddon || false) === true ? (
      <DatepickerInput
        inputClass={props.inputClass!}
        value={props.value?.toDateString()}
      />
    ) : (
      <DatepickerInputWithAddon
        inputClass={props.inputClass!}
        value={props.value?.toDateString()}
      />
    );

  return (
    <>
      {/* date picker control */}
      <DatePicker
        customInput={input}
        timeIntervals={props.tI}
        selected={props.value}
        value={props.value.toDateString()}
        onChange={(date) => props.onChange(date)}
        showTimeSelect={props.showTimeSelect}
        timeFormat={props.timeFormat || "hh:mm a"}
        timeCaption={props.timeCaption}
        dateFormat={props.dateFormat || "MM/dd/yyyy"}
        minDate={props.minDate}
        maxDate={props.maxDate}
        monthsShown={props.monthsShown}
        showTimeSelectOnly={props.showTimeSelectOnly}
        inline={props.inline}
        autoComplete="off"
      />
    </>
  );
};

export default HyperDatepicker;

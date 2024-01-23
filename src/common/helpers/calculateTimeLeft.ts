import moment from 'moment';

export function calculateTimeLeft(date?: string) {
  const days = moment(date).diff(moment(), 'days');
  const hours = moment(date).diff(moment().add(days, 'days'), 'hours');
  const minutes = moment(date).diff(
    moment().add(days, 'days').add(hours, 'hours'),
    'minutes',
  );
  const isPositive =
    !!date && (days >= 0 || hours >= 0 || minutes >= 0 || false);
  return { timeLeft: [days, hours, minutes], isPositive };
}

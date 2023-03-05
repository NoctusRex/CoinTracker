import { map, OperatorFunction } from 'rxjs';

export function mapToVoid(): OperatorFunction<any, void> {
  return map(() => {
    return;
  });
}

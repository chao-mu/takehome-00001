import { useCallback } from "react";

const predicatesByName = {
  exists: (value) => !!value,
  oneOf: (value, { within }) => within.includes(value),
};

function evalPredicate(values, predicate) {
  const { check, fieldId, args } = predicate;

  return predicatesByName[check](values[fieldId], args);
}

export default (rules) =>
  useCallback(
    (values) => {
      const errors = {};
      for (const rule of rules) {
        const { if: ifPred, assert: assertPred } = rule;
        if (
          (!ifPred || evalPredicate(values, ifPred)) &&
          !evalPredicate(values, assertPred)
        ) {
          const { message } = rule;

          errors[assertPred.fieldId] = message;
        }
      }

      return { values, errors };
    },
    [rules],
  );

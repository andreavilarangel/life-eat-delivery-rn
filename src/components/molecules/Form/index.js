import React, { useEffect } from 'react'
import { useFormik } from 'formik'

import { Input } from '../Input'
import { Box } from '~/components/atoms/Box'
import { Button } from '~/components/atoms/Button'

export const Form = ({
  initialValues,
  onChangeText,
  validationSchema,
  ...props
}) => {
  const {
    validateForm,
    values,
    setFieldValue,
    setValues,
    errors,
    isValid,
    validateField,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
  })

  const checkEmptyFields = checkData => {
    const toCheck = checkData || values
    const find = props?.data?.find(
      v =>
        toCheck?.[v?.field_type || v?.field]?.length <= 0 && !v?.not_required,
    )
    if (!!find) {
      return false
    }
    validateForm()
    return isValid
  }

  useEffect(() => {
    if (initialValues && values !== initialValues) {
      setValues(initialValues)
    }
  }, [initialValues])

  useEffect(() => {
    if (props?.getValues) {
      props?.getValues(
        values,
        checkEmptyFields(values === initialValues ? initialValues : null),
      )
    }
  }, [values, isValid])

  return (
    <Box>
      {props?.data?.map((item, index) => {
        return (
          <Input
            key={item?.id || `${item?.field}-${index}`}
            {...item}
            placeholder={item?.placeholder}
            value={values?.[item?.field]}
            error={!isValid && errors?.[item?.field]}
            mb={12}
            onEndEditing={() => {
              if (!!validationSchema?.fields?.[item?.field]) {
                validateField(item?.field)
              }
            }}
            onChangeText={text => {
              if (onChangeText) {
                onChangeText(item?.field, text)
              }
              setFieldValue(item?.field, text)
            }}
          />
        )
      })}
      {props?.formButton && (
        <Button mt={4} {...props?.formButton}>
          {props?.formButton?.text || 'Salvar'}
        </Button>
      )}
    </Box>
  )
}

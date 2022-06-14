import { useState, Fragment } from 'react'

import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/accordion'

import { Box, Text, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'

import { Card, FileUploader, Form } from 'components'
import { Modal } from 'components/Modal'

import useStyles from './Faq.styles'
import { UploadableFile } from 'components/Common/FileUploader/FileUploader.types'

export interface FaqAccordionItem {
  id?: number
  title: string
  content: string
  styles?: {
    border: number
  }
}

export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const questionList: FaqAccordionItem[] = [
  {
    id: 1,
    title: `I can't change my passcode`,
    content: `This Privacy Policy is intended to help you 
    understand what information we collect, why we collect it, and how you can update, manage, export and delete your information.`,
    styles: {
      border: 0,
    },
  },
  {
    id: 2,
    title: `There's an impostor account trying to access my account`,
    content: `Lorem ipsum dolor sit amet, consectetur adip`,
  },
  {
    id: 3,
    title: `Can I use someone else's account?`,
    content: `Lorem ipsum dolor sit amet, consectetur adip ABCSBCG`,
  },
]

const MAX_NUM_OF_CHARS = 250

export const FAQ = () => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)
  const styles = useStyles()

  const question = "Didn't find your answer?"

  const handleCloseContactModal = () => {
    setIsOpenContactModal(false)
  }
  return (
    <Box __css={styles.faqContainer}>
      <Card title="FAQ" variant="flat" height={550}>
        <Box __css={styles.faqContent}>
          <Accordion variant="custom" flex={1} allowMultiple>
            {questionList.length > 0 &&
              questionList.map((questionItem: FaqAccordionItem) => {
                return (
                  <Fragment key={questionItem.id}>
                    <AccordionItem border={questionItem.styles?.border}>
                      <h2>
                        <AccordionButton __css={styles.accordionButton}>
                          <Box __css={styles.accordionTitle}>
                            {questionItem.title}
                          </Box>
                          <AccordionIcon __css={styles.accordionIcon} />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Box __css={styles.accordionContent}>
                          {questionItem.content}
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Fragment>
                )
              })}
          </Accordion>
          <Box __css={styles.faqFooter}>
            <Text variant="content"> {question} </Text>
            <Link
              __css={styles.faqContactLink}
              onClick={() => setIsOpenContactModal(true)}
            >
              Contact us
            </Link>
          </Box>
        </Box>
      </Card>
      <ContactModal
        isOpen={isOpenContactModal}
        onClose={handleCloseContactModal}
      />
    </Box>
  )
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const styles = useStyles()
  const [files, setFiles] = useState<UploadableFile[]>([])
  const [feedback, setFeedback] = useState<string>('')
  const [feedbackCount, setFeedbackCount] = useState<number>(0)

  // const schema = yup
  //   .object({
  //     email: yup
  //       .string()
  //       .email('Invalid Email! Please enter another email.')
  //       .required('This field should not be left blank.'),
  //   })
  //   .required()

  const { handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      files: [],
    },
  })

  const handleSendMessage = ({ files }: { files: File }) => {
    console.log(files)
    handleUpload()
    onClose()
  }

  const handleUpload = () => {
    if (files.length > 0) {
      files.map(({ file }: UploadableFile) => {
        const key = 'files'

        return new Promise<string>((res, rej) => {
          // wait for integrate
          console.log(res)
          console.log(rej)
          const formData = new FormData()
          formData.append('file', file)
          formData.append('upload_preset', key)

          // handle request upload here
        })
      })
    }
  }

  const handleChangeFile = (files: UploadableFile[]) => {
    setFiles(files)
  }

  const handleChangeText = (text: string) => {
    const textLength = text.length
    setFeedback(text)
    setFeedbackCount(textLength)
  }

  return (
    <>
      <Modal
        title="Still need help? "
        isOpen={isOpen}
        onClose={() => onClose()}
        width={400}
      >
        <Box __css={styles.contactModalContainer}>
          <Text variant="content">
            Please provide the following details to us. We will contact you as
            soon as possible.
          </Text>
          <Box>
            <Textarea
              placeholder="Help us to provide more details about your concerns"
              onChange={(e) => handleChangeText(e.target.value)}
              maxLength={MAX_NUM_OF_CHARS}
            >
              {feedback}
            </Textarea>
            <Text textAlign="right" variant="content">
              {`${feedbackCount}/${MAX_NUM_OF_CHARS}`}
            </Text>
          </Box>
          <Form
            onSubmit={handleSubmit((values: any) => handleSendMessage(values))}
          >
            <Box __css={styles.contactUpload}>
              <Text variant="title">Attachment(s)</Text>
              <FileUploader onChange={handleChangeFile} />
            </Box>
            <Button type="submit" __css={styles.sendButton} variant="solid">
              Send message
            </Button>
          </Form>
        </Box>
      </Modal>
    </>
  )
}

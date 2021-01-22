import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import './resume.styl';

const styles = theme => ({
  resume: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return [
    {
      label: 'INTRODUCTION',
      content: ['My name is Wangbin, graduated from Sun Yat-Sen University (2014-2018), and majored in computer science. Now I am work as front-end computer programmer in a Chinese LLC.']
    },
    {
      label: 'SKILL',
      content: ['HTML CSS JavaScript LESS SASS STYLUS Vue React Angular']
    },
    {
      label: 'HOBBY',
      content: ['Coding, Painting, Reading, Go hiking, UX design, Photography, Cooking, etc.']
    },
    {
      label: 'CONTACT',
      content: [
        'github: https://github.com/dragonir',
        'leetcode: https://leetcode-cn.com/u/tricell/',
        'cnblogs: https://www.cnblogs.com/dragonir',
        'weibo: @量子破碎',
        'onmyoji: 量子破碎'
      ]
    }
  ];
}

function Resume(props) {
  const { classes } = props;
  const [activeStep] = React.useState(-1);
  const steps = getSteps();
  return (
    <div className={classes.resume}>
      <Stepper orientation="vertical" activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <p className="resume_label">{step.label}</p>
              {step.content.map((item, idx) => (
                <p className="resume_content" key={idx}>{item}</p>
              ))}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default withStyles(styles)(Resume);

